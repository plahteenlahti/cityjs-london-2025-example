import React from "react";
import { Canvas } from "@react-three/fiber/native";
import { Suspense, useState } from "react";
import { StyleSheet, View } from "react-native";

function InteractiveCube({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <mesh
      position={position}
      scale={isClicked ? 1.2 : isHovered ? 1.1 : 1}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      onPointerDown={() => setIsClicked(true)}
      onPointerUp={() => setIsClicked(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={isClicked ? "red" : isHovered ? "yellow" : color}
        metalness={isHovered ? 0.6 : 0.1}
        roughness={0.3}
      />
    </mesh>
  );
}

function DraggableSphere({ position }: { position: [number, number, number] }) {
  const [isDragging, setIsDragging] = useState(false);
  const [spherePosition, setSpherePosition] = useState(position);

  const onPointerMove = (event: any) => {
    if (isDragging) {
      setSpherePosition([
        spherePosition[0] + event.movementX * 0.01,
        spherePosition[1] - event.movementY * 0.01,
        spherePosition[2],
      ]);
    }
  };

  return (
    <mesh
      position={spherePosition}
      onPointerDown={() => setIsDragging(true)}
      onPointerUp={() => setIsDragging(false)}
      onPointerMove={onPointerMove}
    >
      <sphereGeometry args={[0.7, 32, 32]} />
      <meshStandardMaterial
        color={isDragging ? "orange" : "lightblue"}
        metalness={0.3}
        roughness={0.4}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <InteractiveCube position={[-2, 0, 0]} color="hotpink" />
      <DraggableSphere position={[2, 0, 0]} />
    </>
  );
}

export default function InteractionScreen() {
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
