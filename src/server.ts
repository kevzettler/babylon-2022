import { Scene, NullEngine, MeshBuilder, ArcRotateCamera, HemisphericLight, Vector3 } from 'babylonjs';
import http = require('http');

//Polyfill XMLhttprequest for babylon asset loaderers
import { XMLHttpRequest } from 'xmlhttprequest';
global.XMLHttpRequest = XMLHttpRequest;


// default scene
const engine = new NullEngine();
const scene = new Scene(engine);
const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 0), scene);

engine.runRenderLoop(function() {
    console.log("render loop tick")
    scene.render();
})

console.log("server started on port",  );
