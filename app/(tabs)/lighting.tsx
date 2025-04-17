import { Canvas } from "@react-three/fiber/native";
import { Suspense } from "react";
import { View } from "react-native";

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[-2, 2, 2]} intensity={1} color="red" />
      <spotLight
        position={[2, 2, 2]}
        intensity={1}
        color="blue"
        angle={0.5}
        penumbra={0.5}
      />
      <directionalLight position={[0, 5, 5]} intensity={0.5} color="white" />

      <mesh position={[-2, 0, 0]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </>
  );
}

export default function LightingScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Canvas shadows>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </View>
  );
}
