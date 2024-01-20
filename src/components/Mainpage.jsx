import React,{useContext,useEffect,useState} from "react";
import "./css/Mainpage.css";
import Header from "./Header";
import Card from "./Card";
import Wcwe from "./Wcwe";
import Prefooter from "./Prefooter";
import Footer from "./Footer";
import { CrowdfundingContext } from "../context/CrowdfundingContext";

// import { useState,useEffect } from "react";
// import { ethers } from "ethers";

function Mainpage() {
  const [campaignButton,setCampaignButton] = useState(false);

  const {ConnectWallet,currentAccount,getManager,requests,manager} = useContext(CrowdfundingContext);
  useEffect(()=>{
    getManager();
    
    if(manager===currentAccount){
        setCampaignButton(true);
    }
    else{
        setCampaignButton(false);
    }
    },[currentAccount,manager]);
  return (
    <div>
      <Header />
      

      <hr />

      <div className="div1">
        <div className="div1a">
          <img
            src="https://cdn.discordapp.com/attachments/1096324843877703713/1148920034538823740/image.png"
            alt="logo"
          />
        </div>

        <div className="div1b">
          {(currentAccount==="")&&<button className="connectWallet" onClick={ConnectWallet}> Connect Wallet</button>}
          <p className="text1">Join the Charity-fundraising Revolution</p>
          <p className="text2">
            Blockchain-Powered Compassion: Transforming Aid with Transparency.
          </p>
          <div className="flex item-center justify-content gap">

          <button onClick={getManager}  className="initHelp">
            <p>Initiate Help</p>
          </button>
          {campaignButton? <a target="_blank" href="https://docs.google.com/spreadsheets/d/1ovqGeserifd-MD69BzakeodknADBp9C5wZJw8GxJOqQ/edit?resourcekey#gid=1789532689">
            
            <button    className="initHelp">
            <p >See Requests</p>
          </button></a>: <a target="_blank" href="https://forms.gle/4oyFDynZHbFbC3Sn9">

         <button onClick={getManager}  className="initHelp1">
            <p style={{fontSize:'0.7rem'}}>Register for Campaigns</p>
          </button>  </a>}
          </div>
          <div style={{ height: 'auto',marginLeft:'27rem',marginTop:'3rem',paddingLeft:'3rem' ,width: '50rem',paddingLeft:'3rem',display:'flex',flexDirection:'row',gap:'1rem'}}>
      {/* <img width={`100%`} height={`auto`} style={{objectFit:'contain'}} src="https://cdn.discordapp.com/attachments/1096324843877703713/1179805627577532556/IC_logo_horizontal.png?ex=657b1e9d&is=6568a99d&hm=0ea4c0ba64fd133f2e4e0262bc7ebe126bd8cae35b5ce3583cd8915b3b81cf2f&" alt="" /> */}
      </div>
        </div>
      </div>

      <hr />

      <div className="div2">
        <h4 className="text3">List of all fundraising campaigns</h4>
        <div className="groupCard">

          {requests.map((request,index) => {
            // console.log("request from mainpage",request[4]);
            if(request[4]===true){
              return null;
            }
            return (
              <Card
                key={index}
                index={index}
                img={request[7]}
                description={request[0]}
                user={request[2]}
                fundReq={request[3]}
                // days='40'
                type={request[6]}
                votes={request[5]}
              />
            );
          })}
          
          {/* <Card
            img="https://cdn.discordapp.com/attachments/1096324843877703713/1148929641495674950/image.png"
            description="Assam flood fundraising, up lift the condition."
            user="Ravi Sharma"
            fundReq="10"
            days="30"
            type="Disaster"
            votes="0"
          /> */}
        </div>
      </div>
      <hr />
      <Wcwe />
      <hr />
      <Prefooter />

      <Footer />
    </div>
  );
}

export default Mainpage;
