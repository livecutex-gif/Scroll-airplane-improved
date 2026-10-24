// RIY3.0 Hive — WebGL bootstrap.
// The scene/scroll film itself lives as a classic script in index.html and waits
// for the `three-ready` event, exactly like the original build. Here we simply
// bundle three.js + the post-processing addons and expose them on window.
import * as T from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { GTAOPass } from "three/examples/jsm/postprocessing/GTAOPass.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

(window as any).THREE = Object.assign({}, T, {
  EffectComposer,
  RenderPass,
  ShaderPass,
  UnrealBloomPass,
  GTAOPass,
  GLTFLoader,
});

window.dispatchEvent(new Event("three-ready"));
