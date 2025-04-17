# 3D Graphics in React & React Native using React Three Fiber

This project is a companion demo for the CityJS London 2025 talk "3D Graphics in React & React Native using React Three Fiber". It demonstrates how to create interactive 3D graphics that work seamlessly across both web and native platforms using React Three Fiber.

## Overview

The project showcases five fundamental concepts of 3D graphics through interactive examples:

1. **Three.js Basics** - Demonstrates direct Three.js usage with Expo GL and Expo Three
2. **Basic Shapes** - Demonstrates primitive 3D objects (box, sphere, cylinder) and their properties
3. **Lighting** - Shows different types of lights (ambient, point, spot, directional) and their effects
4. **Animation** - Features various animation techniques (rotation, bouncing, scaling)
5. **Interaction** - Implements user interaction with 3D objects (hover, click, drag)

## Technical Stack

- React Native / Expo
- React Three Fiber
- Three.js
- Expo GL
- Expo Three
- TypeScript

## Important Note: Expo SDK 52 Compatibility

This project requires a patch for Three.js to work properly with Expo SDK 52. The patch fixes a WebGL shader error checking issue that can cause crashes on Android.

To apply the patch:

1. Create a `patches` directory in your project root
2. Create a file named `three+0.175.0.patch` with the following content:

```diff
diff --git a/node_modules/three/build/three.cjs b/node_modules/three/build/three.cjs
index 03bd422..6695740 100644
--- a/node_modules/three/build/three.cjs
+++ b/node_modules/three/build/three.cjs
@@ -63829,7 +63829,7 @@ function WebGLProgram( renderer, cacheKey, parameters, bindingStates ) {
 	function onFirstUse( self ) {

 		// check for link errors
-		if ( renderer.debug.checkShaderErrors ) {
+		if ( renderer.debug.checkShaderErrors && program ) {

 			const programLog = gl.getProgramInfoLog( program ).trim();
 			const vertexLog = gl.getShaderInfoLog( glVertexShader ).trim();
```

3. Add the following to your `package.json`:

```json
{
  "scripts": {
    "postinstall": "patch-package"
  }
}
```

4. Install patch-package:

```bash
npm install --save-dev patch-package
```

5. Run `npm install` to apply the patch

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

The project is organized into five main screens, each demonstrating a different aspect of 3D graphics:

- `app/(tabs)/three.tsx` - Basic Three.js implementation with Expo GL
- `app/(tabs)/index.tsx` - Basic shapes demo
- `app/(tabs)/lighting.tsx` - Lighting effects demo
- `app/(tabs)/animation.tsx` - Animation techniques demo
- `app/(tabs)/interaction.tsx` - User interaction demo

## Features

### Three.js Basics

- Direct WebGL context management with Expo GL
- Basic scene setup with camera and renderer
- Simple animation loop
- Manual resource cleanup

### Basic Shapes

- Box, sphere, and cylinder primitives
- Different materials and colors
- Basic transformations (position, rotation)

### Lighting

- Ambient light for base illumination
- Point light for localized lighting
- Spot light for focused beams
- Directional light for sun-like effects
- Material properties (metalness, roughness)

### Animation

- Frame-based animations using `useFrame`
- Different animation types:
  - Continuous rotation
  - Sine-wave based bouncing
  - Pulsating scale changes

### Interaction

- Hover effects with material changes
- Click interactions with scaling
- Drag-and-drop functionality
- Real-time position updates

## Cross-Platform Considerations

The project demonstrates how to:

- Handle WebGL context differences between web and native
- Implement touch interactions that work on both platforms
- Manage performance considerations for mobile devices
- Use responsive design for different screen sizes

## License

MIT

## Author

[Perttu Lähteenlahti](https://perttu.dev)
