# 3D Graphics in React & React Native using React Three Fiber

This project is a companion demo for the CityJS London 2025 talk "3D Graphics in React & React Native using React Three Fiber". It demonstrates how to create interactive 3D graphics that work seamlessly across both web and native platforms using React Three Fiber.

## Overview

The project showcases four fundamental concepts of 3D graphics through interactive examples:

1. **Basic Shapes** - Demonstrates primitive 3D objects (box, sphere, cylinder) and their properties
2. **Lighting** - Shows different types of lights (ambient, point, spot, directional) and their effects
3. **Animation** - Features various animation techniques (rotation, bouncing, scaling)
4. **Interaction** - Implements user interaction with 3D objects (hover, click, drag)

## Technical Stack

- React Native / Expo
- React Three Fiber
- Three.js
- TypeScript

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

The project is organized into four main screens, each demonstrating a different aspect of 3D graphics:

- `app/(tabs)/index.tsx` - Basic shapes demo
- `app/(tabs)/lighting.tsx` - Lighting effects demo
- `app/(tabs)/animation.tsx` - Animation techniques demo
- `app/(tabs)/interaction.tsx` - User interaction demo

## Features

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
