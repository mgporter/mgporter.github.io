import { useEffect, useState } from "react";
import { useLocalStorage, useScreen, useWindowSize } from "usehooks-ts";
import { useAppStore } from "../components/AppState";
import { C } from "../constants";

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

export function useClientSettings() {
  
  const { height, width } = useWindowSize()
  const [narrowWindow, setNarrowWindow] = useState<boolean>(false);
  const [slowConnection, setSlowConnection] = useState<boolean>(false);
  const { enableEffects, setEnableEffects } = useAppStore()
  const [value, setValue, removeValue] = useLocalStorage("enableEffects", true);


  useEffect(() => {
    if (height > (width * 1.2) || width <= 896) {
      setNarrowWindow(true);
      setEnableEffects(false);
    } else {
      setNarrowWindow(false);
      setEnableEffects(value);
    }
  }, [height, width, setEnableEffects, enableEffects, value]);

  useEffect(() => {
    setSlowConnection(isQuickConnection() ? false : true);
  }, [])

  return {
    narrowWindow,
    slowConnection
  }

}