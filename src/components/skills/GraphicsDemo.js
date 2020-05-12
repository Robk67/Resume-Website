import React, { Component } from "react";
import * as THREE from "three";
import { isMobile } from "react-device-detect";

class GraphicsDemo extends Component {
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    //ADD SCENE
    this.scene = new THREE.Scene();

    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(80, width / height, 0.1, 5000);
    this.camera.position.z = 1300;
    this.camera.lookAt(0, 0, 0);

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setClearColor(0x008000, 0);
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    //ADD GEOMETRY
    const geometry = new THREE.IcosahedronGeometry(800, 4).vertices;
    const material = new THREE.PointsMaterial({
      color: "#f2ae0a",
      size: 5,
      opacity: 0.7,
    });
    const points = new THREE.BufferGeometry().setFromPoints(geometry);
    this.sphere = new THREE.Points(points, material);
    this.scene.add(this.sphere);

    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };

  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  animate = () => {
    this.sphere.rotation.x += 0.003;
    this.sphere.rotation.y -= 0.001;
    this.sphere.rotation.z -= 0.002;

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    var web = "500px";
    var mobile = "250px";

    return (
      <div
        style={{
          width: isMobile ? mobile : web,
          height: isMobile ? mobile : web,
        }}
        ref={(mount) => {
          this.mount = mount;
        }}
      />
    );
  }
}

export default GraphicsDemo;
