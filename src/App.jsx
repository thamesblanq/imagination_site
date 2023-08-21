import Header from "./Header";
import Content from "./Content";
import DOTS from 'vanta/src/vanta.dots';
import { useEffect } from "react";


function App() {

  useEffect(() => {
      DOTS({
        el: "#animate",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xcd7931,
        backgroundColor: 0x140f0f,
        size: 5.00,
        spacing: 13.00
      })
  }, [])

  return (
    <div className="w-full h-auto bg-black overflow-hidden" id="animate">
      <Header />
      <Content />
    </div>
  )
}

export default App
