import './Utils/Sizes.js'
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import * as THREE from "three";
import Camera from "./Camera.js";
import Renderer from "./Renderer";
import World from "./World/World.js";
import Resources from "./Utils/Resources";
import sources from "./sources.js";

let instance = null;

export default class Experience {
    constructor(canvas) {
        if (instance) {
            return instance;
        }

        instance = this;

        // Global access to the Experience object
        window.experience = this;

        // Options
        this.canvas = canvas;
        console.log(this.canvas);

        // Set up
        this.sizes = new Sizes();
        this.time = new Time();
        this.scene = new THREE.Scene()
        this.resources = new Resources(sources)
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()

        // Sizes resize event
        this.sizes.on('resize', () => {
            this.resize()
        })

        this.time.on('tick', () => {
            this.update()
        })
    }

    resize() {
        this.camera.resize()
        this.renderer.resize()
    }

    update() {
        this.camera.update()
        this.renderer.update()
    }
}
