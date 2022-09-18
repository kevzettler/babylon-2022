import { Scene, Engine, MeshBuilder, ArcRotateCamera, HemisphericLight, Vector3 } from 'babylonjs';

export default function basicScene(engine: Engine): Scene {
  const scene = new Scene(engine);

  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
  const box = MeshBuilder.CreateBox("box", {}, scene);
  return scene;
}
