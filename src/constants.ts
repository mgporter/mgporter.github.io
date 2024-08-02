interface NetworkInformation {
  downlink: number;
  downlinkMax?: number;
  effectiveType: "slow-2g" | "2g" | "3g" | "4g";
  rtt: number;
  saveData: boolean;
  type?: "bluetooth" | "cellular" | "ethernet" | "none" | "wifi" | "wimax" | "other" | "unknown";
}

interface MyNavigator extends Navigator {
  connection: NetworkInformation;
}

/** Returns true is the connection is quick (3g or above). If
 * the NetworkInformation API is not available, it defaults to true.
 */
function isQuickConnection() {

  if (testNavigator(navigator)) {
    return navigator.connection.effectiveType != "2g" && 
      navigator.connection.effectiveType != "slow-2g";
  }
  else return true;
}

function testNavigator(obj: Navigator): obj is MyNavigator {
  return (obj as MyNavigator).connection != undefined;
}

const C = {
  IS_VERTICAL_SCREEN: window.innerHeight > window.innerWidth,
  IS_QUICK_CONNECTION: isQuickConnection(),
  // HIDE_ICONS_ON_PROJECT_PAGE: false,
  PROJECT_PATH: "/projects"
}

export { C };