import { Scene, NullEngine, MeshBuilder, ArcRotateCamera, HemisphericLight, Vector3 } from 'babylonjs';
//Polyfill XMLhttprequest for babylon loader usage
import { XMLHttpRequest } from 'xmlhttprequest';
global.XMLHttpRequest = XMLHttpRequest;


const engine = new NullEngine();
const scene = new Scene(engine);


engine.runRenderLoop(function() {
    console.log("render loop tick")
    scene.render();
})


console.log("server started...");
