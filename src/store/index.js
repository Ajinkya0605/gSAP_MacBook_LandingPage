import { texture } from "three/tsl";
import { create } from "zustand";

export const useMacBookStore = create((set) => ({
    color: "#adb5bd",
    setColor: (color) => set({ color }),

    scale: 0.06,
    setScale: (scale) => set({ scale }),

    texture: "/videos/feature-1.mp4",
    setTexture: (texture) => set({ texture }),

    reset: () => set({ color: '#adb5bd', scale: 0.06, texture: "/videos/feature-1.mp4" }),
}))