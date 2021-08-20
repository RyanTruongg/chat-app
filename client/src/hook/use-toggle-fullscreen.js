import { useState } from "react";

export default function useToggleFullscreen() {
  const [fullscreen, setFullscreen] = useState(false);


  function toggleFullscreen() {
    const root = document.getElementById("root");
    if (!document.fullscreenElement) {
      root
        .requestFullscreen()
        .then(() => setFullscreen(true))
        .catch((err) => {
          alert(
            `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
          );
        });
    } else {
      setFullscreen(false);
      document.exitFullscreen();
    }
  }

  return [fullscreen, toggleFullscreen]
} 