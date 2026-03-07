import fs from 'fs';

const bytes = fs.readFileSync('public/models/macbook-16-transformed.glb');
const magic = bytes.readUInt32LE(0);
const version = bytes.readUInt32LE(4);
const length = bytes.readUInt32LE(8);
const jsonLength = bytes.readUInt32LE(12);
const jsonChunkType = bytes.readUInt32LE(16);
const jsonBuf = bytes.slice(20, 20 + jsonLength);

const jsonStr = jsonBuf.toString('utf8');
const gltf = JSON.parse(jsonStr);

gltf.materials.forEach((mat) => {
    let color = mat.pbrMetallicRoughness?.baseColorFactor;
    console.log(mat.name, color);
});
