// import { css } from 'lit-element';
// export const WireframeStyles = css`
// .gradient{&.gray{--tw-gradient-from:#d1d5db;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,rgba(209,213,219,0));--tw-gradient-to:#4b5563;fill:currentColor;--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}&.gray,&.red{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}&.red{--tw-gradient-from:#fca5a5;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,hsla(0,94%,82%,0));--tw-gradient-to:#dc2626;fill:currentColor;--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}&.blue{--tw-gradient-from:#93c5fd;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,rgba(147,197,253,0));--tw-gradient-to:#2563eb;fill:currentColor;--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}&.blue,&.green{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}&.green{--tw-gradient-from:#6ee7b7;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,rgba(110,231,183,0));--tw-gradient-to:#059669;fill:currentColor;--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}&.yellow{--tw-gradient-from:#fcd34d;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,rgba(252,211,77,0));--tw-gradient-to:#d97706;fill:currentColor;--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}&.akwaaba,&.yellow{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}&.akwaaba{--tw-gradient-from:#ffa15b;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,rgba(255,161,91,0));--tw-gradient-to:#d15900;fill:currentColor;--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.button{--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);background-color:transparent;border-radius:.75rem;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);padding:1rem;text-align:center;transform:var(--tw-transform);transition-duration:.15s;transition-duration:.5s;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.button:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;--tw-shadow:inset 0 2px 4px 0 rgba(0,0,0,.06);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);transform:var(--tw-transform)}.button:focus{outline:2px solid transparent;outline-offset:2px}.button{&.success,&.success[data-btn-to=active]{--tw-bg-opacity:1;background-color:rgba(4,120,87,var(--tw-bg-opacity))}&.success,&.success[data-btn-to=active]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}&.success:hover,&.success:hover[data-btn-to=active]{--tw-bg-opacity:1;background-color:rgba(6,78,59,var(--tw-bg-opacity))}&.info,&.info[data-btn-to=active]{--tw-bg-opacity:1;background-color:rgba(96,165,250,var(--tw-bg-opacity))}&.info,&.info[data-btn-to=active]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}&.info:hover,&.info:hover[data-btn-to=active]{background-color:rgba(59,130,246,var(--tw-bg-opacity))}&.warning,&.warning[data-btn-to=active]{--tw-bg-opacity:1;background-color:rgba(180,83,9,var(--tw-bg-opacity))}&.warning,&.warning[data-btn-to=active]{--tw-text-opacity:1;color:rgba(17,24,39,var(--tw-text-opacity))}&.info:hover,&.info:hover[data-btn-to=active]{background-color:rgba(120,53,15,var(--tw-bg-opacity))}&.danger,&.danger[data-btn-to=active]{--tw-bg-opacity:1;background-color:rgba(185,28,28,var(--tw-bg-opacity))}&.danger,&.danger[data-btn-to=active]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}&.info:hover,&.info:hover[data-btn-to=active]{background-color:rgba(127,29,29,var(--tw-bg-opacity))}&.primary,&.primary[data-btn-to=active]{--tw-bg-opacity:1;background-color:rgba(29,78,216,var(--tw-bg-opacity))}&.primary,&.primary[data-btn-to=active]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}&.info:hover,&.info:hover[data-btn-to=active]{--tw-bg-opacity:1;background-color:rgba(30,58,138,var(--tw-bg-opacity))}&[data-btn-to=inactive]{&.success{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgba(52,211,153,var(--tw-bg-opacity));color:rgba(31,41,55,var(--tw-text-opacity))}&.info{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgba(147,197,253,var(--tw-bg-opacity));color:rgba(31,41,55,var(--tw-text-opacity))}&.warning{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgba(251,191,36,var(--tw-bg-opacity));color:rgba(31,41,55,var(--tw-text-opacity))}&.danger{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgba(248,113,113,var(--tw-bg-opacity));color:rgba(31,41,55,var(--tw-text-opacity))}&.primary{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgba(96,165,250,var(--tw-bg-opacity));color:rgba(31,41,55,var(--tw-text-opacity))}}}

// /*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com*/

// /*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */html{-webkit-text-size-adjust:100%;line-height:1.15;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;margin:0}hr{color:inherit;height:0}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}body{font-family:inherit;line-height:inherit}*,:after,:before{border:0 solid;box-sizing:border-box}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:-moz-focusring{outline:auto}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{color:inherit;line-height:inherit;padding:0}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-border-opacity:1;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-blur:var(--tw-empty,/*!*/ /*!*/);--tw-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-invert:var(--tw-empty,/*!*/ /*!*/);--tw-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);--tw-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);border-color:rgba(229,231,235,var(--tw-border-opacity))}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}@media (min-width:2811px){.container{max-width:2811px}}.visible{visibility:visible}.\!visible{visibility:visible!important}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{left:0;right:0;top:0}.bottom-0,.inset-0{bottom:0}.left-0{left:0}.right-0{right:0}.right-4{right:1rem}.bottom-16{bottom:4rem}.top-0{top:0}.top-4{top:1rem}.left-20{left:5rem}.top-28{top:7rem}.top-12{top:3rem}.-left-14{left:-3.5rem}.-left-7{left:-1.75rem}.z-10{z-index:10}.z-20{z-index:20}.z-50{z-index:50}.my-4{margin-bottom:1rem;margin-top:1rem}.my-2{margin-bottom:.5rem;margin-top:.5rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.mr-4{margin-right:1rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mt-1{margin-top:.25rem}.ml-2{margin-left:.5rem}.mt-2{margin-top:.5rem}.ml-0{margin-left:0}.mr-0{margin-right:0}.ml-6{margin-left:1.5rem}.ml-64{margin-left:16rem}.mr-72{margin-right:18rem}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.table-cell{display:table-cell}.table-header-group{display:table-header-group}.table-row-group{display:table-row-group}.table-row{display:table-row}.grid{display:grid}.contents{display:contents}.hidden{display:none}.h-1{height:.25rem}.h-8{height:2rem}.h-48{height:12rem}.h-40{height:10rem}.h-36{height:9rem}.h-full{height:100%}.h-14{height:3.5rem}.h-11{height:2.75rem}.max-h-48{max-height:12rem}.w-full{width:100%}.w-1\/3{width:33.333333%}.w-auto{width:auto}.w-2\/3{width:66.666667%}.w-48{width:12rem}.w-40{width:10rem}.w-36{width:9rem}.w-64{width:16rem}.w-72{width:18rem}.w-80{width:20rem}.w-6{width:1.5rem}.flex-grow{flex-grow:1}.transform{transform:var(--tw-transform)}.resize{resize:both}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.content-center{align-content:center}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-y-scroll{overflow-y:scroll}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rounded{border-radius:.25rem}.rounded-md{border-radius:.375rem}.rounded-full{border-radius:9999px}.rounded-2xl{border-radius:1rem}.rounded-xl{border-radius:.75rem}.rounded-none{border-radius:0}.rounded-3xl{border-radius:1.5rem}.rounded-r-none{border-bottom-right-radius:0;border-top-right-radius:0}.rounded-b-md{border-bottom-left-radius:.375rem;border-bottom-right-radius:.375rem}.border{border-width:1px}.border-2{border-width:2px}.border-r-2{border-right-width:2px}.border-l-4{border-left-width:4px}.border-b-2{border-bottom-width:2px}.border-solid{border-style:solid}.border-none{border-style:none}.border-red-600{--tw-border-opacity:1;border-color:rgba(220,38,38,var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity:1;border-color:rgba(229,231,235,var(--tw-border-opacity))}.border-transparent{border-color:transparent}.border-akwaaba-orange-dark{--tw-border-opacity:1;border-color:rgba(209,89,0,var(--tw-border-opacity))}.border-akwaaba-orange-light{--tw-border-opacity:1;border-color:rgba(255,161,91,var(--tw-border-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-green-500{--tw-bg-opacity:1;background-color:rgba(16,185,129,var(--tw-bg-opacity))}.bg-gray-50{--tw-bg-opacity:1;background-color:rgba(249,250,251,var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgba(243,244,246,var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgba(229,231,235,var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-green-900{--tw-bg-opacity:1;background-color:rgba(6,78,59,var(--tw-bg-opacity))}.bg-gradient-to-tr{background-image:linear-gradient(to top right,var(--tw-gradient-stops))}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}.from-akwaaba-orange-default{--tw-gradient-from:#f97817;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,rgba(249,120,23,0))}.from-gray-50{--tw-gradient-from:#f9fafb;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,rgba(249,250,251,0))}.from-akwaaba-orange-light{--tw-gradient-from:#ffa15b;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,rgba(255,161,91,0))}.via-white{--tw-gradient-stops:var(--tw-gradient-from),#fff,var(--tw-gradient-to,hsla(0,0%,100%,0))}.via-gray-100{--tw-gradient-stops:var(--tw-gradient-from),#f3f4f6,var(--tw-gradient-to,rgba(243,244,246,0))}.to-akwaaba-orange-dark{--tw-gradient-to:#d15900}.fill-current{fill:currentColor}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.p-1{padding:.25rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.py-2\.5{padding-bottom:.625rem;padding-top:.625rem}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-4{padding-bottom:1rem;padding-top:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-0{padding-left:0;padding-right:0}.pl-4{padding-left:1rem}.pb-4{padding-bottom:1rem}.pl-0{padding-left:0}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-xs{font-size:.75rem;line-height:1rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-base{font-size:1rem;line-height:1.5rem}.font-semibold{font-weight:600}.font-normal{font-weight:400}.font-bold{font-weight:700}.font-light{font-weight:300}.uppercase{text-transform:uppercase}.leading-tight{line-height:1.25}.tracking-wide{letter-spacing:.025em}.text-gray-500{--tw-text-opacity:1;color:rgba(107,114,128,var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.text-yellow-600{--tw-text-opacity:1;color:rgba(217,119,6,var(--tw-text-opacity))}.text-red-400{--tw-text-opacity:1;color:rgba(248,113,113,var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:rgba(55,65,81,var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity:1;color:rgba(156,163,175,var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgba(75,85,99,var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity:1;color:rgba(31,41,55,var(--tw-text-opacity))}.text-akwaaba-orange-dark{--tw-text-opacity:1;color:rgba(209,89,0,var(--tw-text-opacity))}.shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04)}.shadow,.shadow-xl{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.shadow-inner{--tw-shadow:inset 0 2px 4px 0 rgba(0,0,0,.06)}.shadow-inner,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.ring-0{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color)}.ring,.ring-0{box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.ring{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.ring-akwaaba-orange-light{--tw-ring-opacity:1;--tw-ring-color:rgba(255,161,91,var(--tw-ring-opacity))}.blur{--tw-blur:blur(8px)}.blur,.filter{filter:var(--tw-filter)}body{--tw-gradient-from:#f9fafb;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,rgba(249,250,251,0));--tw-gradient-stops:var(--tw-gradient-from),#f3f4f6,var(--tw-gradient-to,rgba(243,244,246,0));--tw-gradient-to:#f9fafb;background-image:linear-gradient(to right,var(--tw-gradient-stops));overflow-y:scroll}[scrollbar=app-scrollbar]::-webkit-scrollbar{cursor:pointer;width:4px}[scrollbar=app-scrollbar]::-webkit-scrollbar-track{background-color:rgba(229,231,235,var(--bg-opacity));cursor:pointer}[scrollbar=app-scrollbar]::-webkit-scrollbar-thumb{background-color:#a0aec0;cursor:pointer}mwc-icon-button{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);align-content:center;align-items:center;border-radius:9999px;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);display:flex;justify-content:center}mwc-icon-button:hover{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}mwc-icon-button.inactive{--tw-bg-opacity:1;fill:currentColor;--tw-text-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));color:rgba(107,114,128,var(--tw-text-opacity))}mwc-icon-button.active{--tw-gradient-from:#ffa15b;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,rgba(255,161,91,0));--tw-gradient-to:#d15900;fill:currentColor;--tw-text-opacity:1;--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);background-image:linear-gradient(to bottom right,var(--tw-gradient-stops));box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:rgba(255,255,255,var(--tw-text-opacity))}.side-bar>.nav,.side-bar>nav,side-bar>.nav,side-bar>nav{--tw-border-opacity:1;align-items:center;border-color:rgba(243,244,246,var(--tw-border-opacity));border-right-width:2px;display:none;flex-wrap:wrap;justify-content:space-between;position:relative;width:16rem;z-index:10;&>div{position:fixed}&>div{top:0}&>div{left:0}&>div{display:flex}&>div{height:100%}&>div{flex-direction:column}& .header,& .main,& header,& main{padding-bottom:1rem;padding-top:1rem}& .header,& header{align-items:center;border-bottom-width:1px;display:flex;height:3.5rem;justify-content:center}& .main,& main{flex-grow:1;height:100%;overflow-x:hidden;overflow-y:auto}& main>ul.ul{display:flex}& main>ul.ul{flex-direction:column}& main>ul.ul>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}& main>ul.ul{padding-bottom:1rem;padding-top:1rem}& main>ul.ul>li>a.a{position:relative}& main>ul.ul>li>a.a{display:flex}& main>ul.ul>li>a.a{height:2.75rem}& main>ul.ul>li>a.a{flex-direction:row}& main>ul.ul>li>a.a{align-items:center}& main>ul.ul>li>a.a{border-left-width:4px}& main>ul.ul>li>a.a{border-color:transparent}& main>ul.ul>li>a.a{padding-right:1.5rem}& main>ul.ul>li>a.a{--tw-text-opacity:1;color:rgba(75,85,99,var(--tw-text-opacity))}& main>ul.ul>li>a.a:focus{outline:2px solid transparent;outline-offset:2px}& main>ul.ul>li>a.a:hover{--tw-border-opacity:1;border-color:rgba(209,89,0,var(--tw-border-opacity))}& main>ul.ul>li>a.a:hover{--tw-bg-opacity:1;background-color:rgba(249,250,251,var(--tw-bg-opacity))}& main>ul.ul>li>a.a:hover{--tw-text-opacity:1;color:rgba(31,41,55,var(--tw-text-opacity))}& li>a.selected{--tw-border-opacity:1!important;border-color:rgba(209,89,0,var(--tw-border-opacity))!important}& li>a.selected{--tw-bg-opacity:1!important;background-color:rgba(249,250,251,var(--tw-bg-opacity))!important}& li>a.selected{--tw-text-opacity:1!important;color:rgba(31,41,55,var(--tw-text-opacity))!important}& li>a.selected{outline:2px solid transparent!important;outline-offset:2px!important}& li>a>.icon{margin-left:1rem}& li>a>.icon{display:inline-flex}& li>a>.icon{align-items:center}& li>a>.icon{justify-content:center}& li>a>.icon>mwc-icon{width:1.5rem}& li>a>.icon>mwc-icon{--tw-text-opacity:1;color:rgba(209,89,0,var(--tw-text-opacity))}& li>a>.title{margin-left:.5rem}& li>a>.title{width:11rem}& li>a>.title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}& li>a>.title{font-size:.875rem;line-height:1.25rem}& li>a>.title{letter-spacing:.025em}}.right-side-bar,right-side-bar{bottom:0;display:none;flex-direction:row;flex-wrap:nowrap;overflow:hidden;overflow-y:auto;padding:1rem 1rem 1rem 0;position:fixed;right:0;top:0;width:18rem;z-index:50;&>div{position:fixed}&>div{top:0}&>div{right:0}&>div{display:flex}&>div{height:100%}&>div{flex-direction:column}& .header,& .main,& header,& main{padding-bottom:1rem;padding-top:1rem}& .header,& header{align-items:center;border-bottom-width:1px;display:flex;height:3.5rem;justify-content:center}& .main,& main{flex-grow:1;overflow-x:hidden;overflow-y:auto}}.right-drawer-content{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:1rem;margin-bottom:1rem;margin-top:1rem;overflow-y:scroll;padding-left:1.5rem;padding-right:1.5rem;.bio-content>.name{margin-bottom:.5rem;margin-top:.5rem}.bio-content>.name{font-size:1.875rem;line-height:2.25rem}.bio-content>.name{--tw-text-opacity:1;color:rgba(17,24,39,var(--tw-text-opacity))}.bio-content>.email,.bio-content>.phone{margin-bottom:.5rem;margin-top:.5rem}.bio-content>.email,.bio-content>.phone{font-size:1rem;line-height:1.5rem}.bio-content>.email,.bio-content>.phone{--tw-text-opacity:1;color:rgba(156,163,175,var(--tw-text-opacity))}}.right-drawer-content.centered .bio-data{display:flex;justify-content:center;width:100%}.right-drawer-content.centered .bio-data>.bio-content>.email,.right-drawer-content.centered .bio-data>.bio-content>.name,.right-drawer-content.centered .bio-data>.bio-content>.phone{display:flex;justify-content:center;width:100%}.right-drawer-content mwc-button,.right-drawer-content profile-avatar{display:flex;justify-content:center;margin-bottom:2.5rem;margin-top:2.5rem;width:100%}.right-drawer-content mwc-button{--tw-bg-opacity:1!important;fill:currentColor!important;background-color:rgba(229,231,235,var(--tw-bg-opacity))!important;border-radius:.75rem!important;margin-bottom:1rem!important;margin-top:1rem!important}right-side-bar-drawer .right-drawer-content{background-color:transparent!important;border-radius:0!important}akwaaba-app-clock>.container{display:flex;justify-content:flex-end;margin-bottom:2.75rem;margin-top:.5rem}akwaaba-app-clock>.container>.time{--tw-text-opacity:1;color:rgba(107,114,128,var(--tw-text-opacity));font-size:1.5rem;line-height:2rem}.mobile-nav{& li>a.a{position:relative}& li>a.a{display:flex}& li>a.a{height:2.75rem}& li>a.a{flex-direction:row}& li>a.a{align-items:center}& li>a.a{border-left-width:4px}& li>a.a{border-color:transparent}& li>a.a{padding-right:1.5rem}& li>a.a{--tw-text-opacity:1;color:rgba(75,85,99,var(--tw-text-opacity))}& li>a.a:focus{outline:2px solid transparent;outline-offset:2px}& li>a.a:hover{--tw-border-opacity:1;border-color:rgba(209,89,0,var(--tw-border-opacity))}& li>a.a:hover{--tw-bg-opacity:1;background-color:rgba(249,250,251,var(--tw-bg-opacity))}& li>a.a:hover{--tw-text-opacity:1;color:rgba(31,41,55,var(--tw-text-opacity))}& li>a.selected{--tw-border-opacity:1!important;border-color:rgba(209,89,0,var(--tw-border-opacity))!important}& li>a.selected{--tw-bg-opacity:1!important;background-color:rgba(249,250,251,var(--tw-bg-opacity))!important}& li>a.selected{--tw-text-opacity:1!important;color:rgba(31,41,55,var(--tw-text-opacity))!important}& li>a.selected{outline:2px solid transparent!important;outline-offset:2px!important}& li>a>.icon{margin-left:1rem}& li>a>.icon{display:inline-flex}& li>a>.icon{align-items:center}& li>a>.icon{justify-content:center}& li>a>.icon>mwc-icon{width:1.5rem}& li>a>.icon>mwc-icon{--tw-text-opacity:1;color:rgba(209,89,0,var(--tw-text-opacity))}& li>a>.title{margin-left:.5rem}& li>a>.title{width:11rem}& li>a>.title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}& li>a>.title{font-size:.875rem;line-height:1.25rem}& li>a>.title{letter-spacing:.025em}}.main-app-content,.main-content{margin-left:0!important;margin-right:0!important;padding:1rem!important}datatables-new{>[mdc-data-table=data-table]{width:100%!important}}dt-pagination .mdc-button,dt-pagination .mdc-icon-button{height:30px!important;padding:0!important;width:30px!important}.main-app-content{height:auto;overflow-y:auto}.main-app-content>.main-container{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:1rem;margin-bottom:.75rem;padding:1.5rem}.main-app-content>.main-container:last-child{margin-bottom:13rem}.mdc-drawer{z-index:50!important}autocomplete-search-box{width:10rem;[autocomplete-search-box=button],mwc-icon-button[autocomplete-search-box=button]{position:absolute}[autocomplete-search-box=button],mwc-icon-button[autocomplete-search-box=button]{top:1rem}[autocomplete-search-box=button],mwc-icon-button[autocomplete-search-box=button]{left:5rem}[autocomplete-search-box=button],mwc-icon-button[autocomplete-search-box=button]{display:block}[autocomplete-search-box=search-box]{display:none}[autocomplete-search-box=search-box].showing{position:absolute}[autocomplete-search-box=search-box].showing{display:block}[autocomplete-search-box=search-box].showing{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}[autocomplete-search-box=search-box].showing~.main,[autocomplete-search-box=search-box].showing~main{position:absolute}[autocomplete-search-box=search-box].showing~.main,[autocomplete-search-box=search-box].showing~main{top:7rem}[autocomplete-search-box=search-box].showing~.main,[autocomplete-search-box=search-box].showing~main{left:3rem}[autocomplete-search-box=search-box].showing~.main,[autocomplete-search-box=search-box].showing~main{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}[autocomplete-search-box=search-box].showing>[autocomplete-search-box=container]{position:absolute!important}[autocomplete-search-box=search-box].showing>[autocomplete-search-box=container]{top:3rem!important}[autocomplete-search-box=search-box].showing>[autocomplete-search-box=container]{left:-3.5rem!important}[autocomplete-search-box=container]{margin-top:.25rem}[autocomplete-search-box=container]{display:flex}[autocomplete-search-box=container]{width:20rem}[autocomplete-search-box=container]{flex-direction:row}[autocomplete-search-box=container]{align-items:center}[autocomplete-search-box=container]{border-radius:1.5rem}[autocomplete-search-box=container]{border-style:none}[autocomplete-search-box=container]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}[autocomplete-search-box=container]{--tw-text-opacity:1;color:rgba(31,41,55,var(--tw-text-opacity))}[autocomplete-search-box=container]{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}mwc-icon[autocomplete-search-box=icon]{display:block}mwc-icon[autocomplete-search-box=icon]{width:1.5rem}mwc-icon[autocomplete-search-box=icon]{border-style:none}mwc-icon[autocomplete-search-box=icon]{--tw-text-opacity:1;color:rgba(209,213,219,var(--tw-text-opacity))}[autocomplete-search-box=input],input[type=search]{display:block}[autocomplete-search-box=input],input[type=search]{height:2.75rem}[autocomplete-search-box=input],input[type=search]{width:18rem}[autocomplete-search-box=input],input[type=search]{border-radius:1.5rem}[autocomplete-search-box=input],input[type=search]{border-bottom-right-radius:0;border-top-right-radius:0}[autocomplete-search-box=input],input[type=search]{border-style:none}[autocomplete-search-box=input],input[type=search]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}[autocomplete-search-box=input],input[type=search]{padding-left:.75rem;padding-right:.75rem}[autocomplete-search-box=input],input[type=search]{--tw-text-opacity:1;color:rgba(31,41,55,var(--tw-text-opacity))}& .main,& main{flex-grow:1;margin-left:.5rem;margin-right:.5rem;overflow-x:hidden;position:absolute;width:18rem}& main>[autocomplete-search-box=ul],& main>ul.ul{display:flex}& main>[autocomplete-search-box=ul],& main>ul.ul{max-height:12rem}& main>[autocomplete-search-box=ul],& main>ul.ul{flex-direction:column}& main>[autocomplete-search-box=ul]>:not([hidden])~:not([hidden]),& main>ul.ul>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}& main>[autocomplete-search-box=ul],& main>ul.ul{overflow-y:scroll}& main>[autocomplete-search-box=ul],& main>ul.ul{border-bottom-left-radius:.375rem;border-bottom-right-radius:.375rem}& main>[autocomplete-search-box=ul],& main>ul.ul{border-top-left-radius:.5rem;border-top-right-radius:.5rem}& main>[autocomplete-search-box=ul],& main>ul.ul{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}& main>[autocomplete-search-box=ul]>li.li,& main>ul.ul>li.li{border-bottom-width:2px}& main>[autocomplete-search-box=ul]>li.li,& main>ul.ul>li.li{--tw-border-opacity:1;border-color:rgba(243,244,246,var(--tw-border-opacity))}& main>[autocomplete-search-box=ul]>li.li,& main>ul.ul>li.li{padding-left:0;padding-right:0}& main>[autocomplete-search-box=ul]>li.li,& main>ul.ul>li.li{padding-bottom:.75rem;padding-top:.75rem}& main>[autocomplete-search-box=ul]>li.li:hover,& main>ul.ul>li.li:hover{--tw-bg-opacity:1;background-color:rgba(239,246,255,var(--tw-bg-opacity))}& main>[autocomplete-search-box=ul]>li.li:hover,& main>ul.ul>li.li:hover{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}& main>[autocomplete-search-box=ul]>li.li:last-child,& main>ul.ul>li.li:last-child{border-style:none}& main>[autocomplete-search-box=ul]>li.li:last-child,& main>ul.ul>li.li:last-child{padding-left:0;padding-right:0}& main>[autocomplete-search-box=ul]>li.li:last-child,& main>ul.ul>li.li:last-child{padding-bottom:.75rem;padding-top:.75rem}& main>[autocomplete-search-box=ul]>li.li>a.a,& main>ul.ul>li.li>a.a{position:relative}& main>[autocomplete-search-box=ul]>li.li>a.a,& main>ul.ul>li.li>a.a{display:flex}& main>[autocomplete-search-box=ul]>li.li>a.a,& main>ul.ul>li.li>a.a{height:2.75rem}& main>[autocomplete-search-box=ul]>li.li>a.a,& main>ul.ul>li.li>a.a{flex-direction:row}& main>[autocomplete-search-box=ul]>li.li>a.a,& main>ul.ul>li.li>a.a{align-items:center}& main>[autocomplete-search-box=ul]>li.li>a.a,& main>ul.ul>li.li>a.a{border-left-width:4px}& main>[autocomplete-search-box=ul]>li.li>a.a,& main>ul.ul>li.li>a.a{border-color:transparent}& main>[autocomplete-search-box=ul]>li.li>a.a,& main>ul.ul>li.li>a.a{padding-right:1.5rem}& main>[autocomplete-search-box=ul]>li.li>a.a,& main>ul.ul>li.li>a.a{--tw-text-opacity:1;color:rgba(75,85,99,var(--tw-text-opacity))}& main>ul.ul>li.li>a.a:focus & main>[autocomplete-search-box=ul]>li.li>a.a:focus{outline:2px solid transparent;outline-offset:2px}& main>[autocomplete-search-box=ul]>li.li>a.a:hover,& main>ul.ul>li.li>a.a:hover{--tw-text-opacity:1;color:rgba(31,41,55,var(--tw-text-opacity))}& li.li>a>.icon{margin-left:1rem}& li.li>a>.icon{display:inline-flex}& li.li>a>.icon{align-items:center}& li.li>a>.icon{justify-content:center}& li.li>a>.icon>mwc-icon{width:1.5rem}& li.li>a>.icon>mwc-icon{--tw-text-opacity:1;color:rgba(209,89,0,var(--tw-text-opacity))}& li.li>a>.content>.title{margin-left:.5rem}& li.li>a>.content>.title{width:14rem}& li.li>a>.content>.title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}& li.li>a>.content>.title{font-size:1rem;line-height:1.5rem}& li.li>a>.content>.title{font-weight:700}& li.li>a>.content>.title{letter-spacing:.025em}& li.li>a>.content>.description{margin-left:1.5rem}& li.li>a>.content>.description{width:13rem}& li.li>a>.content>.description{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}& li.li>a>.content>.description{font-size:.875rem;line-height:1.25rem}& li.li>a>.content>.description{letter-spacing:.025em}}[autocomplete-search-box=input]::-moz-placeholder,autocomplete-search-box>input[type=search]::-moz-placeholder{--tw-text-opacity:1;color:rgba(107,114,128,var(--tw-text-opacity));padding:1.5rem}[autocomplete-search-box=input]:-ms-input-placeholder,autocomplete-search-box>input[type=search]:-ms-input-placeholder{--tw-text-opacity:1;color:rgba(107,114,128,var(--tw-text-opacity));padding:1.5rem}[autocomplete-search-box=input]::placeholder,autocomplete-search-box>input[type=search]::placeholder{--tw-text-opacity:1;color:rgba(107,114,128,var(--tw-text-opacity));padding:1.5rem}[autocomplete-search-box=input]:focus,autocomplete-search-box>input[type=search]:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);outline:2px solid transparent;outline-offset:2px}[autocomplete-search-box=input]:focus,[autocomplete-search-box=input]:hover,autocomplete-search-box>input[type=search]:focus,autocomplete-search-box>input[type=search]:hover{--tw-bg-opacity:1;background-color:rgba(239,246,255,var(--tw-bg-opacity))}@media (min-width:768px){body{overflow-y:hidden}side-bar>.nav,side-bar>nav{position:fixed}side-bar>.nav,side-bar>nav{left:0}side-bar>.nav,side-bar>nav{top:0}side-bar>.nav,side-bar>nav{bottom:0}side-bar>.nav,side-bar>nav{display:block}side-bar>.nav,side-bar>nav{width:16rem}side-bar>.nav,side-bar>nav{flex-direction:row}side-bar>.nav,side-bar>nav{flex-wrap:nowrap}side-bar>.nav,side-bar>nav{overflow:hidden}side-bar>.nav,side-bar>nav{overflow-y:auto}[autocomplete-search-box=search-box]{display:block!important}[autocomplete-search-box=search-box].showing{position:relative!important}[autocomplete-search-box=search-box].showing{display:block!important}[autocomplete-search-box=search-box].showing{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)!important}[autocomplete-search-box=button],mwc-icon-button[autocomplete-search-box=button]{display:none!important}autocomplete-search-box [autocomplete-search-box=search-box].showing>[autocomplete-search-box=container]{left:-1.75rem!important}.main-app-content,.main-content{display:block!important;margin-left:16rem!important}.main-app-content{height:100vh;overflow-y:scroll}}@media (min-width:1280px){.main-app-content,.main-content{margin-right:18rem!important}.main-app-content,.main-content,datatables-new{margin-left:16rem!important}datatables-new{margin-right:17.9rem!important;>[mdc-data-table=data-table]{margin-left:0!important}>[mdc-data-table=data-table]{display:block!important}}.right-side-bar,right-side-bar{display:block}}.focus\:border-gray-500:focus{--tw-border-opacity:1;border-color:rgba(107,114,128,var(--tw-border-opacity))}.focus\:bg-white:focus{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.focus\:shadow-inner:focus{--tw-shadow:inset 0 2px 4px 0 rgba(0,0,0,.06);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.focus\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}@media (min-width:768px){.md\:mb-6{margin-bottom:1.5rem}}
// `;