import React from "react";
import Navbar from "../navbar/navbar";
import './mission.css'

const MissionLanding = () => (
    <div className='custom-section landing-container'>
        <Navbar fixed={true}/>
        <div className="slide">
            <h3>{'VSC Network'}</h3>
            <h4 style={{fontSize: "21px"}}>
                Next generation smart contract L2 on the HIVE blockchain.
            </h4>
            <center>
                <iframe width="560" height="315" src="https://3speak.tv/embed?v=vsc.network/qldflfmt"   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

            </center>
        </div>
    </div>
);
  
export default MissionLanding;