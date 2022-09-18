"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const babylonjs_1 = require("babylonjs");
//Polyfill XMLhttprequest for babylon loader usage
const xmlhttprequest_1 = require("xmlhttprequest");
global.XMLHttpRequest = xmlhttprequest_1.XMLHttpRequest;
const engine = new babylonjs_1.NullEngine();
const scene = new babylonjs_1.Scene(engine);
engine.runRenderLoop(function () {
    console.log("render loop tick");
    scene.render();
});
console.log("server started...");
