declare module "three/examples/jsm/loaders/GLTFLoader.js" {
  import { Group, Camera, AnimationClip } from "three";

  export type GLTF = {
    scene: Group;
    scenes: Group[];
    cameras: Camera[];
    animations: AnimationClip[];
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