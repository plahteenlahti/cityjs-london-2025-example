import { Canvas } from "@react-three/fiber/native";
import { Suspense } from "react";
import { View } from "react-native";

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 20, 5]} intensity={1} />
      <mesh position={[-1.5, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
      <mesh position={[1.5, 0, 0]} rotation={[0, 1.5, Math.PI / 3]}>
        <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
        <meshStandardMaterial color="lightgreen" />
      </mesh>
    </>
  );
}

export default function ShapesScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Canvas
        style={{ flex: 1 }}
        // @ts-expect-error events is not typed to handle null but
        // null is the only way to get the canvas to render on iOS with the new architecture
        events={null}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </View>
  );
}
