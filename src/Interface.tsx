// import ReactToPrint from "react-to-print";
import CardFace from "./components/card-face";
import { useRef } from "react";

export default function Interface() {
  const componentRef = useRef<HTMLDivElement | null>(null);
  return (
    <div id="interface" ref={componentRef} className="interface-bg">
      <div>
        <CardFace />
      </div>
      {/* <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current || null}
      /> */}
    </div>
  );
}
