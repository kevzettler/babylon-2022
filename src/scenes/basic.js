"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const babylonjs_1 = require("babylonjs");
function basicScene(engine) {
    const scene = new babylonjs_1.Scene(engine);
    const light = new babylonjs_1.HemisphericLight("light", new babylonjs_1.Vector3(0, 1, 0), scene);
    const box = babylonjs_1.MeshBuilder.CreateBox("box", {}, scene);
    return scene;
}
exports.default = basicScene;
