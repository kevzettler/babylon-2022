import { Scene, Engine, MeshBuilder, ArcRotateCamera, HemisphericLight, Vector3 } from 'babylonjs';

const canvas = document.getElementById('render-target');
const engine = new Engine(canvas, true);

const basicScene = () => {
    const scene = new Scene(engine);
    const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 0), scene);
    camera.attachControl(canvas, true);
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    const box = MeshBuilder.CreateBox("box", {}, scene);
    return scene;
}

const scene = basicScene();
engine.runRenderLoop(function () {
    scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});
