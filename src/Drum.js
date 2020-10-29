import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Pad from "./Pads"
import './style.css';

export default class DrumReact extends Component {
    constructor(props){
        super(props);  
        this.playTheSound = this.playTheSound.bind(this);
        this.padKeyPress = this.padKeyPress.bind(this);
      }

      idAndSounds = {
        data:[
          {pId:"Sting",cID:"Q",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
          {pId:"Sting-1",cID:"W",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
          {pId:"PadStrike",cID:"E",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
          {pId:"Clap",cID:"A",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
          {pId:"Throw",cID:"S",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
          {pId:"Disc",cID:"D",src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
          {pId:"Kick-n-Hat",cID:"Z",src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
          {pId:"Kick",cID:"X",src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},
          {pId:"Jump",cID:"C",src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}
           
         
        ]
      }
    
        playTheSound(e){
        let sound = document.getElementById(e.target.children[0].id);
        sound.play();
        let displayUpdate =  e.target.id;
        document.getElementById("display").innerHTML= displayUpdate;
        }
      
      padKeyPress(e) {
        let keyPressed = String.fromCharCode(e.keyCode);
        let sound = document.getElementById(keyPressed);
        if (sound != null){
          sound.play();
          let displayUpdate =  document.getElementById(keyPressed).parentNode.id;
          document.getElementById("display").innerHTML= displayUpdate;
        }        
      }
      
      componentDidMount(){
        document.addEventListener("keydown", this.padKeyPress, false);
      }
      componentWillUnmount(){
        document.removeEventListener("keydown", this.padKeyPress, false);
      }
     
      render() {    
        return (
          <div className = "row">
            <div className = "col-md-6" >
              {
                this.idAndSounds.data.map( res =>{
                  return <Pad onclick={this.playTheSound} pID={res.pId} cID={res.cID} musicSrc={res.src}/>
                })
              }     
              </div>
            <div className="col-md-6" id="display"> 
            </div> 
           </div> 
        );
      }
}

