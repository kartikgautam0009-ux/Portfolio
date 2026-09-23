import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function VideoCanvas({ scrollProgress, isMuted }) {
  const containerRef = useRef(null);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  // Initialize Fullscreen Video Three.js Canvas
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    const cameraDist = 5;
    camera.position.z = cameraDist;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Video Elements & WebGL Textures
    const v1 = document.createElement('video');
    v1.src = '/assets/video2.mp4';
    v1.muted = true;
    v1.playsInline = true;
    v1.preload = 'auto';

    const v2 = document.createElement('video');
    v2.src = '/assets/video1.mp4';
    v2.muted = true;
    v2.playsInline = true;
    v2.preload = 'auto';

    video1Ref.current = v1;
    video2Ref.current = v2;

    v1.load();
    v2.load();

    v1.play().catch(() => {});
    v2.play().catch(() => {});

    const texture1 = new THREE.VideoTexture(v1);
    texture1.minFilter = THREE.LinearFilter;
    texture1.magFilter = THREE.LinearFilter;
    texture1.format = THREE.RGBAFormat;

    const texture2 = new THREE.VideoTexture(v2);
    texture2.minFilter = THREE.LinearFilter;
    texture2.magFilter = THREE.LinearFilter;
    texture2.format = THREE.RGBAFormat;

    // 3. Completely Fixed Fullscreen Cover Plane Mesh
    const planeGeo = new THREE.PlaneGeometry(1, 1, 16, 16);

    const mat1 = new THREE.MeshBasicMaterial({
      map: texture1,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide
    });

    const mat2 = new THREE.MeshBasicMaterial({
      map: texture2,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide
    });

    const mesh1 = new THREE.Mesh(planeGeo, mat1);
    mesh1.position.z = 0.01;
    scene.add(mesh1);

    const mesh2 = new THREE.Mesh(planeGeo, mat2);
    mesh2.position.z = 0.02;
    scene.add(mesh2);

    // Scale mesh to perfectly fit viewport without tilt or distortion
    const updateMeshScale = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      const aspect = width / height;

      const vFov = (camera.fov * Math.PI) / 180;
      const visibleHeight = 2 * Math.tan(vFov / 2) * cameraDist;
      const visibleWidth = visibleHeight * aspect;

      const videoAspect = 16 / 9;

      let planeW, planeH;
      if (aspect > videoAspect) {
        planeW = visibleWidth;
        planeH = visibleWidth / videoAspect;
      } else {
        planeH = visibleHeight;
        planeW = visibleHeight * videoAspect;
      }

      mesh1.scale.set(planeW, planeH, 1);
      mesh2.scale.set(planeW, planeH, 1);
    };

    updateMeshScale();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      updateMeshScale();
    };
    window.addEventListener('resize', handleResize);

    v1.addEventListener('loadedmetadata', updateMeshScale);
    v2.addEventListener('loadedmetadata', updateMeshScale);

    // 4. Ultra-Smooth High-Frequency RAF Video Scrubbing Engine
    let animationFrameId;
    let smoothProgress = 0;
    let currentV1Time = 0;
    let currentV2Time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth scroll interpolation (0.05 lerp for ultra-fluid scrubbing)
      smoothProgress += (scrollProgress.current - smoothProgress) * 0.06;

      const d1 = v1.duration || 10;
      const d2 = v2.duration || 10;

      let blend = 0;
      if (smoothProgress <= 0.45) {
        blend = 0;
        const targetV1 = (smoothProgress / 0.45) * d1;
        currentV1Time += (targetV1 - currentV1Time) * 0.12;

        const diff1 = Math.abs(v1.currentTime - currentV1Time);
        if (diff1 > 0.02) {
          if ('fastSeek' in v1) {
            v1.fastSeek(currentV1Time);
          } else {
            v1.currentTime = currentV1Time;
          }
        }
      } else if (smoothProgress > 0.45 && smoothProgress < 0.55) {
        blend = (smoothProgress - 0.45) / 0.1;
        const targetV1 = d1;
        const targetV2 = 0;
        currentV1Time += (targetV1 - currentV1Time) * 0.12;
        currentV2Time += (targetV2 - currentV2Time) * 0.12;

        if (Math.abs(v1.currentTime - currentV1Time) > 0.02) v1.currentTime = currentV1Time;
        if (Math.abs(v2.currentTime - currentV2Time) > 0.02) v2.currentTime = currentV2Time;
      } else {
        blend = 1;
        const targetV2 = ((smoothProgress - 0.55) / 0.45) * d2;
        currentV2Time += (targetV2 - currentV2Time) * 0.12;

        const diff2 = Math.abs(v2.currentTime - currentV2Time);
        if (diff2 > 0.02) {
          if ('fastSeek' in v2) {
            v2.fastSeek(currentV2Time);
          } else {
            v2.currentTime = currentV2Time;
          }
        }
      }

      // Smooth WebGL Texture Alpha Blend
      mat1.opacity = 1 - blend;
      mat2.opacity = blend;

      texture1.needsUpdate = true;
      texture2.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      v1.removeEventListener('loadedmetadata', updateMeshScale);
      v2.removeEventListener('loadedmetadata', updateMeshScale);
      v1.pause();
      v2.pause();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      planeGeo.dispose();
      mat1.dispose();
      mat2.dispose();
      texture1.dispose();
      texture2.dispose();
    };
  }, []);

  useEffect(() => {
    if (video1Ref.current) video1Ref.current.muted = isMuted;
    if (video2Ref.current) video2Ref.current.muted = isMuted;
  }, [isMuted]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    />
  );
}
