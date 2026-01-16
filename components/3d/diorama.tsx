"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

interface DioramaProps {
  modelPath: string;
}

export default function Diorama({ modelPath }: DioramaProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      30,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 6, 20);
    camera.lookAt(0, 0, 0);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    const dir = new THREE.DirectionalLight(0xffffff, 2);
    dir.position.set(3, 5, 2);
    scene.add(dir);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Load Model
    const loader = new GLTFLoader();
    let model: THREE.Group | null = null;

    loader.load(modelPath, (gltf: GLTF) => {
      model = gltf.scene;
      scene.add(model);
    });

    // Mouse Tracking
    let targetX = 0;
    let currentX = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      targetX = (x - 0.5) * 2;
    };

    container.addEventListener("mousemove", onMouseMove);

    // Render Loop
    const animate = () => {
      if (model) {
        currentX += (targetX - currentX) * 0.05;
        model.rotation.y = currentX * 0.4;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [modelPath]);

  return <div ref={mountRef} className="w-full h-full" />;
}