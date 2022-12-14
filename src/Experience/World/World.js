import * as THREE from 'three';
import Experience from "../Experience.js";
import Environment from "./Environment.js";

export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Test mesh
        const testMesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial({ wireframe: true })
        )
        this.scene.add(testMesh)

        // Wait for resources to load
        this.resources.on('ready', () => {
            // Set up
            this.environment = new Environment()
        })
    }
}
