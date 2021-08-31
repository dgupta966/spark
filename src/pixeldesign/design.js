import React from "react";
import { Grid } from "@material-ui/core";

import './design.css'

import Sam from "./asset/sam.jpg";
import huw from "./asset/huw.jpg";
import Vs from "./asset/onevssam.jpg";
import sam21 from "./asset/sam21.jpg";
import sony from "./asset/sony.jpg";

const Design = () => {
  const itemStyle = {
    border: "2px solid white",
    marginTop: "30px",
    width: "500px",
    height: "300px",
    margin: "10px auto",
    backgroundColor: "red",
    position:"relative",
   
  };
  const itemStyle1 = {
    width: "500px",
    height: "120px",
    margin: "2px auto",
  };
  
  return (
    <Grid container>
      <Grid container>
        <Grid item style={itemStyle}>
          <img src={Sam} height="300px" width="500px" alt="note20" />
          <div style={{color:'grey',position:'absolute',top:'270px',left:'80%'}}><strong>From $399.00</strong></div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item style={itemStyle1}>
          <h3 style={{ fontFamily: 'serif'}}>Samsung Galaxy Note 20 Ulra reviews : The props and Cons</h3>
          <small>
            {" "}
            The iPhone 12 Pro is one of he most featre-rich iPhones you can buy
            right now. it has the greatest of all of Apple's features inside
          </small>
          <br /><br />
         <small> BY MARIO SPEEDWAGON | 2 DAYS AGO</small> 
        </Grid>
      </Grid>
      <Grid container spacing={2} justify="center" style={{marginTop:'10px'}}>
        <Grid item >
          <img src={huw} height="200px" width="250px" alt="huawei" />
          <Grid item>
          <h5>Huawei Mate 40 Pro review, launch, <br />design, processor and more</h5>
          <small>BY MARIO SPEEDWAGON | 2 DAYS AGO</small>
          </Grid>
        </Grid>

        <Grid item >
          <img src={Vs} height="200px" width="250px" alt="vs" />
          <h5>OnePlus 9 Pro vs Samsung Galaxy S21<br /> Ultra review, Which Andoid phone wins</h5>
          <small>BY MARIO SPEEDWAGON | 2 DAYS AGO</small>
        </Grid>
      </Grid>
      <Grid container spacing={2} justify="center" style={{marginTop:"10px"}}>
        <Grid item >
          <img src={sam21} height="200px" width="250px" alt="galaxy21" />
          <Grid item>
          <h5>Samsung Galaxy S21 hands on review</h5><br />
          <small>BY MARIO SPEEDWAGON | 2 DAYS AGO</small>
          </Grid>
        </Grid>

        <Grid item >
          <img src={sony} height="200px" width="250px" alt="sony" />
          <h5>Sony Xperia 1 ll review,the best phone<br />for watching movies</h5>
          <small>BY MARIO SPEEDWAGON | 2 DAYS AGO</small>
        </Grid>
      </Grid>
      <Grid container spacing={1} justify="center" style={{marginTop:"10px"}}>
        <Grid item >
          <button className="btn">SHOW MORE</button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Design;
