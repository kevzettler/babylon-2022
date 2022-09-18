import { MuWebSocket } from 'mudb/socket/web/client'
import { MuClient } from 'mudb/client'
import { Scene, Engine, MeshBuilder, ArcRotateCamera, HemisphericLight, Vector3 } from 'babylonjs';
import BasicScene from './scenes/basic';
const canvas:HTMLCanvasElement = document.getElementById('render-target');
const engine = new Engine(canvas, true);

const scene = BasicScene(engine);
const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 0), scene);
camera.attachControl(canvas, true);

engine.runRenderLoop(function () {
    scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});


// construct client
const socket = new MuWebSocket({
    sessionId: Math.random().toString(36).substring(2),
    url: 'ws://127.0.0.1:9966'
})
const client = new MuClient(socket);


// start client
client.start({
    ready: () => {
        // send a `world` message to server when client is ready
        clientChatProtocol.server.message.world('hi everyone')
    }
})
