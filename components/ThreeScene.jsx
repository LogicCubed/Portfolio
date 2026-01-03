"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function ThreeScene() {
  const mountRef = useRef(null);
  const modelRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Transparent background
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7); // soft white light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    loader.load(
      "/models/ak-47.gltf",
      (gltf) => {
        const model = gltf.scene;

        // Rotate the model sideways to face the right direction
        model.rotation.y = Math.PI / 2; // 90 degrees
        model.rotation.x = 0; // optional adjustment
        scene.add(model);
        modelRef.current = model;
      },
      undefined,
      (error) => console.error("Error loading model:", error)
    );

    const animate = () => {
      requestAnimationFrame(animate);

      if (modelRef.current && hovered) {
        // subtle rotation based on mouse
        modelRef.current.rotation.y += (mouse.current.x * 0.01) / 5;
        modelRef.current.rotation.x += (mouse.current.y * 0.01) / 5;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [hovered]);

  const handleMouseMove = (e) => {
    const rect = mountRef.current.getBoundingClientRect();
    mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    mouse.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * -2;
  };

  return (
    <div
      ref={mountRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      style={{ width: "100%", height: "400px" }}
    />
  );
}