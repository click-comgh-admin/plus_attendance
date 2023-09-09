const STATIC_CACHE_NAME = 'akwaaba-attendance-site-base-static-v1.001.16';
const DYNAMIC_CACHE_NAME = 'akwaaba-attendance-site-dynamic-requests-v1.001.16';
const ASSETS = [];
const UNCACHEABLE_URLS = [];

const LIMIT_CACHE_SIZE = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if (keys.length > size) {
                cache.delete(keys[0]).then(() => LIMIT_CACHE_SIZE(name, size));
            }
        });
    });
}

self.addEventListener('install', event => {
    const filesUpdate = cache => {
        const stack = [];
        ASSETS.forEach(file => stack.push(
            cache.add(file).catch(_ => console.error(`can't load ${file} to cache`))
        ));
        return Promise.all(stack);
    };

    event.waitUntil(caches.open(STATIC_CACHE_NAME).then(filesUpdate));
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== STATIC_CACHE_NAME && key !== DYNAMIC_CACHE_NAME)
                .map(key => caches.delete(key))
            );
        })
    );
});

self.addEventListener('fetch', event => {
    let allowCache = true;
    for (const uUrl of UNCACHEABLE_URLS) {
        if (event.request.url.indexOf(uUrl) === 0) {
            allowCache = false;
        }
    }
    if (!allowCache) return;
    if (!(event.request.url.indexOf('http://') === 0)) return;
    if ((event.request.url.indexOf("api.") < 0) && (event.request.url.indexOf("db-api-v2.") < 0) && (event.request.url.indexOf("db-api-v2-2.") < 0) && (event.request.url.indexOf("/api/") < 0)) {
        if (event.request.url.indexOf("/login") > -1) {
            null;
        } else {
            event.respondWith(
                caches.match(event.request).then(cacheResponse => {
                    return cacheResponse || fetch(event.request).then(fetchResponse => {
                        return caches.open(DYNAMIC_CACHE_NAME).then(cache => {
                            cache.put(event.request.url, fetchResponse.clone());
                            LIMIT_CACHE_SIZE(DYNAMIC_CACHE_NAME, 30)
                            return fetchResponse;
                        });
                    });
                }).catch(() => {
                    if (event.request.url.indexOf('.png') > -1) {
                        // return caches.match(ASSETS[2]);
                    } else if (event.request.url.indexOf('.jpg') > -1) {
                        // return caches.match(ASSETS[2]);
                    } else {
                        return caches.match(ASSETS[2]);
                    }
                })
            );
        }
    }
});

const SERVICE_WORKER_TYPES = {
    postAction: "POST_ACTION",
    networkStatus: "NETWORK_STATUS",
}

self.addEventListener('message', event => {
    const response = event.data,
        channel = new BroadcastChannel("SERVICE_WORKER_MESSENGER");

    if (response.type === SERVICE_WORKER_TYPES.networkStatus) {
        let response = false;
        if (navigator.onLine === false) {
            response = false;
        } else {
            response = true;
        }
        channel.postMessage({
            type: SERVICE_WORKER_TYPES.networkStatus,
            message: response,
        });
    }

    if (response.type === SERVICE_WORKER_TYPES.postAction) {
        // console.log('message event postAction', event);
    }
});