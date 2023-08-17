import Header from "./Header";
import Content from "./Content";
import HALO from 'vanta/src/vanta.halo';
import { useEffect } from "react";


function App() {

  useEffect(() => {
      HALO({
        el: "#animate",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        baseColor: 0x20818,
        backgroundColor: 0x109,
        amplitudeFactor: 2.90,
        xOffset: -0.01,
        yOffset: 0.07,
        size: 1.20
      })
  }, [])

  return (
    <div className="w-full h-auto bg-black" id="animate">
      <Header />
      <Content />
    </div>
  )
}

export default App
