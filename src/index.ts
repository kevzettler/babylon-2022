import { Scene, Engine, MeshBuilder, ArcRotateCamera, HemisphericLight, Vector3 } from '@babylonjs/core';
import '@babylonjs/loaders';
import Scene from './scenes/grunt';
const canvas:HTMLCanvasElement = document.getElementById('render-target');
const engine = new Engine(canvas, true);

type SceneDef = (engine:Engine) => Promise<Scene>;

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});


async function loadScene(sceneDef:SceneDef){
    const scene = await sceneDef(engine);
    const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 1.5, 0), scene);
    camera.attachControl(canvas, true);

    engine.runRenderLoop(function () {
        scene.render();
    });
}

loadScene(Scene);
