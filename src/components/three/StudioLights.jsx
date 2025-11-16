import { Environment, Lightformer } from "@react-three/drei";

const StudioLights = () => {
    return (
        <group name="lights">
            <Environment resolution={256}>
                <group>
                    <Lightformer 
                        form="rect"
                        intensity={5}
                        position={[-10, 5, -5]}
                        scale={10}
                    />
                    <Lightformer 
                        form="rect"
                        intensity={5}
                        position={[10, 5, -5]}
                        scale={10}
                    />
                </group>
            </Environment>
        </group>
    )
}

export default StudioLights;