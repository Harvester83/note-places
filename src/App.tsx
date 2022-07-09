import React from "react";
import ol from 'ol';
import styles from './Counter.module.css'
import { Counter } from "./components/Counter";
// import Map from 'ol/map';
// import layer from 'ol/layer';
// import proj from 'ol/proj';
// import extent from 'ol/extent';

// import ol from "openlayers";
// import { layer, Map, Layers } from "react-openlayers";

var resolutions = [];
var matrixIds = [];
// var proj3857 = proj.get("EPSG:3857");
// var maxResolution = extent.getWidth(proj3857!.getExtent()) / 256;

// for (var i = 0; i < 18; i++) {
//   matrixIds[i] = i.toString();
//   resolutions[i] = maxResolution / Math.pow(2, i);
// }

// var tileGrid = new ol.tilegrid.WMTS({
//   origin: [-20037508, 20037508],
//   resolutions: resolutions,
//   matrixIds: matrixIds
// });

// // Key restricted to localhost and wz6wl262l7.codesandbox.io
// var key = "z3s6k7fy9u7m1u1daeewymau";

// var ign_source = new ol.source.OSM({
//   url: "https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png"
// });

// const App = () => (
//   <Map view={{ center: [0, 0], zoom: 2 }}>
//     <Layers>
//       <layer.Tile />
//     </Layers>
//   </Map>
// );

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col">1</div>
      <div className="col">
        <p className={styles.error}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea nemo similique
          delectus est debitis consectetur distinctio labore sint ipsa minus, obcaecati, repudiandae ipsum nisi rem magni. Accusamus doloremque nesciunt totam
        </p>
      </div>
      
      <Counter />
    </div>
  </div>
);

export default App;

