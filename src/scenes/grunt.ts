import { Scene, Engine, HemisphericLight, SceneLoader, Vector3 } from '@babylonjs/core';

export default async function gruntScene(engine: Engine): Promise<Scene> {
    const scene = new Scene(engine);
    new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    await SceneLoader.ImportMeshAsync(undefined, "/assets/", "grunt.glb", scene);

    //Get the Samba animation Group
    const walk = scene.getAnimationGroupByName("MSU_Walk");

    //Play the Samba animation
    walk.start(true, 1.0, walk.from, walk.to, false);
    return scene;
}
