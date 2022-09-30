import { Scene, Engine, ArcRotateCamera, Vector3 } from '@babylonjs/core';
import '@babylonjs/loaders';
import SceneDef from './scenes/grunt';
import Loop from 'fixed-game-loop';
const canvas = document.getElementById('render-target');

type SceneDef = (engine: Engine) => Promise<Scene>;

async function main(sceneDef: SceneDef) {
    const engine = new Engine(canvas, true);
    // Watch for browser/canvas resize events
    window.addEventListener("resize", function() {
        engine.resize();
    });

    const scene = await sceneDef(engine);
    const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 1.5, 0), scene);
    camera.attachControl(canvas, true);


    new Loop({
        update: () => { },
        render: () => scene.render(),
        autoStart: true,
    });
}

if (!canvas) {
    throw new Error("canvas render target undefined");
} else {
    main(SceneDef);
}
