"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const babylonjs_1 = require("babylonjs");
const basic_1 = __importDefault(require("./scenes/basic"));
const canvas = document.getElementById('render-target');
const engine = new babylonjs_1.Engine(canvas, true);
const scene = (0, basic_1.default)(engine);
const camera = new babylonjs_1.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new babylonjs_1.Vector3(0, 0, 0), scene);
camera.attachControl(canvas, true);
engine.runRenderLoop(function () {
    scene.render();
});
// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});
