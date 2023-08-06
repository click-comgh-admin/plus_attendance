const ip = "127.0.0.1";
const alternativeIp = "8.8.8.8";

const checkIp = async (ip: string) => {
  const response = await fetch(`http://${ip}`);
  if (response.status === 200) {
    return true;
  } else {
    return false;
  }
};

const main = async () => {
  const isIpWorking = await checkIp(ip);
  if (!isIpWorking) {
    const isAlternativeIpWorking = await checkIp(alternativeIp);
    if (isAlternativeIpWorking) {
      console.log("Using alternative IP: " + alternativeIp);
    } else {
      console.log("No working IP found");
    }
  } else {
    console.log("IP is working: " + ip);
  }
};

main();
