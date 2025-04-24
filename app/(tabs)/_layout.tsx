import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="three"
        options={{
          title: "Three",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="numbers.rectangle" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Shapes",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="cube.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="lighting"
        options={{
          title: "Model",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="cube.transparent" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="animation"
        options={{
          title: "Animation",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="rotate.3d" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="interaction"
        options={{
          title: "Interaction",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="hand.tap" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
