// Core Three.js module
declare module "three";

// GLTFLoader example module
declare module "three/examples/jsm/loaders/GLTFLoader.js" {
  import { Group } from "three";

  export type GLTF = {
    scene: Group;
    scenes: Group[];
    cameras: any[];
    animations: any[];
  };

  export class GLTFLoader {
    load(
      url: string,
      onLoad: (gltf: GLTF) => void,
      onProgress?: (event: ProgressEvent<EventTarget>) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }
}