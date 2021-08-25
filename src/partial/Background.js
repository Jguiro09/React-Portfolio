import "../styles/Background.css"
import Intro from "../components/Intro"
import React from "react";
import { Canvas } from "@react-three/fiber";

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

const count = 3000;
const positions = new Float32Array(count * 3);

for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
}

const Sphere = () => {
    return (
        <points>
            <sphereBufferGeometry args={[1, 32, 32]} attach="geometry">
                <bufferAttribute
                    attachObject={["attributes", "position"]}
                    array={positions}
                    itemSize={3}
                />
            </sphereBufferGeometry>
            <pointsMaterial size={0.01} sizeAttenuation />
        </points>
    );
};

export default function Background() {
    return (
        <React.Fragment>
        <Canvas className="canvas">
            <perspectiveCamera
                aspect={sizes.width / sizes.height}
                position={[0, 0, 1]}
                fov={75}
                near={0.1}
                far={100}
            >
                <Sphere />
            </perspectiveCamera>
        </Canvas>
        <Intro />
        </React.Fragment>
    );
}
