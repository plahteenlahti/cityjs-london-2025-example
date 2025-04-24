import { Canvas, useLoader } from "@react-three/fiber/native";
import { Suspense, useEffect, useLayoutEffect } from "react";
import { View } from "react-native";
import { OBJLoader } from "three-stdlib";
import { TextureLoader, THREE } from "expo-three";
import { Group, Mesh, Texture } from "three";
import useControls from "r3f-native-orbitcontrols";

function Model(props: JSX.IntrinsicElements["group"]) {
  const obj = useLoader(OBJLoader, require("../../assets/models/dog.obj"));
  const texture = useLoader(
    TextureLoader,
    require("../../assets/models/dog.png")
  );

  useEffect(() => {
    // @ts-expect-error this is the three way of doing this and it's not typed and not suggested
    // it would be better to use gltf file instead of obj
    obj.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = child.receiveShadow = true;
        child.material.map = texture;
      }
    });
  }, [obj]);

  return <primitive object={obj} {...props} />;
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Model rotation={[0, 0.5, 0]} />
    </>
  );
}

export default function ModelScreen() {
  const [OrbitControls, events] = useControls();

  return (
    <View style={{ flex: 1 }} {...events}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 50 }}
        events={undefined}
      >
        <Suspense fallback={null}>
          <OrbitControls enableZoom />
          <Scene />
        </Suspense>
      </Canvas>
    </View>
  );
}
