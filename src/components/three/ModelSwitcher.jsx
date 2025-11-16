import { PresentationControls } from "@react-three/drei";
import { useEffect, useRef } from "react"
import MacBookPro14 from "../models/Macbook-14";
import MacBookPro16 from "../models/Macbook-16";

function ModelSwitcher({ scale, isMobile }) {
    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();

    const showLargeMacbook = scale === 0.08 || scale === 0.05;

    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        polar: [-Math.PI, Math.PI]
    }

    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={largeMacbookRef}>
                    <MacBookPro16 scale={ isMobile ? 0.05 : 0.08 }/>
                </group>
            </PresentationControls>
            
            {/* <PresentationControls>
                <group ref={largeMacbookRef} {...controlsConfig}>
                    <MacBookPro14 scale={ isMobile ? 0.03 : 0.06 }/>
                </group>
            </PresentationControls> */}
        </>
    )
}

export default ModelSwitcher