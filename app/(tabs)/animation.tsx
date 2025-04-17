import { Canvas, useFrame } from "@react-three/fiber/native";
import { View } from "react-native";
import { GLView } from "expo-gl";
import React, { Suspense, useRef } from "react";
import { Mesh } from "three";
import { createContext } from "react";

const Context = createContext(null);

function RotatingBox() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[-2, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

function BouncingSphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[0.7, 32, 32]} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  );
}

function ScalingCylinder() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.2;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
      <meshStandardMaterial color="lightgreen" />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <RotatingBox />
      <BouncingSphere />
      <ScalingCylinder />
    </>
  );
}

export default function AnimationScreen() {
  return (
    <View style={{ flex: 1 }}>
      <GLView
        style={{ flex: 1 }}
        onContextCreate={(gl) => {
          const context = {
            gl,
            pixelRatio: 1,
            viewport: { width: 0, height: 0 },
            camera: { position: [0, 0, 5] },
          };
          return context;
        }}
      >
        <Context.Provider value={null}>
          <Canvas>
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        </Context.Provider>
      </GLView>
    </View>
  );
}
