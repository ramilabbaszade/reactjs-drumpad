import React from 'react';
import './App.css';
import Pad from "./components/Pad";

const pads = [
  {
    name:'boom',
    sound: require("./assets/sounds/boom.wav").default,
    keyCode: "A",
    color:"#61dafb"
  },
  {
    name:'clap',
    sound: require("./assets/sounds/clap.wav").default,
    keyCode: "S",
    color:"#3cff8a"
  },
  {
    name: "hihat",
    sound: require("./assets/sounds/hihat.wav").default,
    keyCode: "D",
    color:"#ff1f41"
  },
  {
    name: "kick",
    sound: require("./assets/sounds/kick.wav").default,
    keyCode: "F",
    color:"#dadada"
  },
  {
    name: "openhat",
    sound: require("./assets/sounds/openhat.wav").default,
    keyCode: "G",
    color: "#f3fa47"
  },
  {
    name: "ride",
    sound: require("./assets/sounds/ride.wav").default,
    keyCode: "H",
    color: "#ff6d37"
  },
  {
    name: "snare",
    sound: require("./assets/sounds/snare.wav").default,
    keyCode: "J",
    color: "#ff6d37"
  },
  {
    name: "tink",
    sound: require("./assets/sounds/tink.wav").default,
    keyCode: "K",
    color: "#ff6d37"
  },
]

type SoundTypes = {
  keyCode: string,
  name: string,
  sound: any,
  color:string
}

const App:React.FC = () => {
  return (
    <div className="pad_container">
      {
        pads.map((pad:SoundTypes,index:any)=>{
          return <Pad key={index} keyCode={pad.keyCode} color={pad.color} name={pad.name} sound={pad.sound}/>
        })
      }
    </div>
  );
}

export default App;
