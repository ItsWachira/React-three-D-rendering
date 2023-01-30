import React from "react";
import {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls} from "@react-three/drei";
import './App.css';

function Model(props){
  const {scene} = useGLTF("/bmw.glb");
  return <primitive object={scene} {...props} />
  
}

export default function App() {
  return (
    <div className="App">
      <div className="App-header">
      <Canvas 
      dp={[1,2]} 
      shadowns cameta={{fav: 45}}
      style={{"position": "absolute"}}
      >
        <PresentationControls 
        speed={1.5} 
        global zoom={.5}
        polar={[-0.1, Math.PI / 4]}>
        <Stage environment={null}>
          <Model scale={0.01} />
        </Stage>
        </PresentationControls>
      </Canvas>
      
      
       </div> 

    </div>
  );
}


