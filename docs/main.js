import Terrain3dToggle from "https://cdn.jsdelivr.net/gh/tjmsy/maplibre-gl-terrain-3d-toggle/src/maplibre-gl-terrain-3d-toggle.js";

const map = new maplibregl.Map({
  container: "map",
  style: "https://tiles.openfreemap.org/styles/liberty",
  center: [0, 0],
  zoom: 1,
  maxPitch: 80,
  hash: true,
});

map.on("load", () => {
  map.addSource("terrain", {
    type: "raster-dem",
    tiles: [
      "https://gbank.gsj.jp/seamless/elev/terrainRGB/gebco/{z}/{y}/{x}.png",
    ],
    tileSize: 256,
    maxzoom: 9,
    attribution:
      "<a href='https://tiles.gsj.jp/tiles/elev/tiles.html#h_gebco' target='_blank'>GEBCO Grid (via Geological Survey of Japan, AIST)</a>",
  });

  map.addControl(
    new Terrain3dToggle({
      sourceName: "terrain",
      initialExaggeration: 2,
      initialVisible: true,
    }),
    "top-left"
  );
});
