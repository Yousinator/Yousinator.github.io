import React, { useState, useEffect, useRef } from "react";
import "../index.css";
import Typed from "react-typed";
import { Canvas } from "@react-three/fiber";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

function Landing() {
  const [loading, setLoading] = useState(true);

  const AnimatedModel = () => {
    const modelRef = useRef();
    const gltf = useLoader(GLTFLoader, "/robot_playground.glb");
    const mixer = useRef(new THREE.AnimationMixer(null)).current;

    useEffect(() => {
      if (gltf.animations.length > 0) {
        mixer.clipAction(gltf.animations[0], modelRef.current).play();
      }
    }, [gltf.animations]);

    useFrame((_, delta) => mixer.update(delta));

    return <primitive object={gltf.scene} ref={modelRef} dispose={null} />;
  };
  useEffect(() => {
    if (loading) {
      // Disable scrolling and hide scrollbar
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  return (
    <>
      {/* {loading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )} */}
      <div className="home-content">
        <div className="model-container">
          <Canvas
            camera={{ position: [0, 1, 3], fov: 100 }}
            style={{ height: "calc(100vh - 200px)" }}
          >
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <AnimatedModel />
          </Canvas>
        </div>
        <h1>
          Hey There! I'm <span>Yousef Musabeh</span>
        </h1>
        <h3>
          I'm a{" "}
          <span className="multiple-text">
            <Typed
              strings={[
                "Startup CEO",
                "Vice President",
                "AI Software Engineer",
                "MLOps Engineer",
              ]}
              typeSpeed={100}
              backSpeed={100}
              backDelay={100}
              loop={true}
            />
          </span>
        </h3>

        <div className="social-media">
          <a
            href="https://github.com/Yousinator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
            <span>Yousinator</span>
          </a>
          <a
            href="https://www.linkedin.com/in/yousef-musabeh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
            <span>Yousef Musabeh</span>
          </a>
          <a
            href="https://medium.com/@y.omusabeh/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-medium"></i>
            <span>Yousef Musabeh</span>
          </a>
        </div>
        <a
          href="/Latest_Resume.pdf"
          download="Yousef-Musabeh-Resume"
          className="btn"
        >
          Download CV
        </a>
      </div>
    </>
  );
}

export default Landing;
