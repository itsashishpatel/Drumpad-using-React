import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default function Pad({onclick,pID,cID,musicSrc}){
    return(
        <div>
            <button className="drum-pad"  onClick={onclick}  id={pID} >{cID}<audio   className="clip" id={cID} src={musicSrc}></audio>
            </button> 
        </div>
    )    
}