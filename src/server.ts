import { Scene, NullEngine, MeshBuilder, ArcRotateCamera, HemisphericLight, Vector3 } from 'babylonjs';
import http = require('http');
import { MuWebSocketServer } from 'mudb/socket/web/server'
import { MuServer } from 'mudb/server'

//Polyfill XMLhttprequest for babylon asset loaderers
import { XMLHttpRequest } from 'xmlhttprequest';
global.XMLHttpRequest = XMLHttpRequest;

const socketPort = 9966;

// construct server
const httpServer = http.createServer()
const socketServer = new MuWebSocketServer({
  server: httpServer,
})
const server = new MuServer(socketServer);


// default scene
const engine = new NullEngine();
const scene = new Scene(engine);
const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 0), scene);

engine.runRenderLoop(function() {
    console.log("render loop tick")
    scene.render();
})


// start server
server.start()
httpServer.listen(sockertPort);

console.log("server started on port",  );
