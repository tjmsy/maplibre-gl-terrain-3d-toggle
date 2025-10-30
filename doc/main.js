//import Terrain3dToggle from "https://cdn.jsdelivr.net/gh/tjmsy/maplibre-gl-terrain-3d-toggle/src/maplibre-gl-terrain-3d-toggle.js";
import Terrain3dToggle from "../src/maplibre-gl-terrain-3d-toggle.js";

const map = new maplibregl.Map({
  container: "map",
  style: "https://tiles.openfreemap.org/styles/liberty",
  center: [0, 0],
  zoom: 1,
  maxPitch: 80,
  hash: true,
});

map.on("load", () => {
  const demSource = new mlcontour.DemSource({
    url: "https://gbank.gsj.jp/seamless/elev/terrainRGB/gebco/{z}/{y}/{x}.png",
    encoding: "mapbox",
    minzoom: 0,
    maxzoom: 19,
    worker: true,
    cacheSize: 100,
    timeoutMs: 30_000,
  });
  demSource.setupMaplibre(maplibregl);

  map.addControl(new Terrain3dToggle(demSource), "top-left");
});
