import { useEffect, useState } from "react";

export function useWebGL() {
  const [supported] = useState(() => {
    let isSupported = true;
    try {
      const canvas = document.createElement("canvas");
      isSupported = !!(window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")));
    } catch {
      isSupported = false;
    }
    return isSupported;
  });

  return supported;
}
