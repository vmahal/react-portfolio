import { Grid, Typography } from "@mui/material";
import Card from "react-animated-3d-card";
import MediaCard from "./MediaCard";
import "./project.css";
import { useEffect, useState } from "react";

const Project = ({ currMode }) => {

  const findMode = currMode ? "lightMode" : "darkMode";
  // const [render, rerender] = useState(false);

  console.log("Project", findMode);

  // useEffect(() => {
  //   if (curMode !== currMode){
  //     rerender(!render)
  //   }
  //   const curMode = currMode;

  // }, [currMode, render]);

  return (
    <div className="outer-div-projects" >
      <Typography variant="div" className={`text-intro-${findMode}`}>
        {" "}
        Projects{" "}
        {/* Let me walk you through some of my recent conributions....{" "} */}
      </Typography>
      {/* <div className="outer-div-projects"> */}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid className="leftGrid childrenGrid" sm={11} md={3}>
          <Card>
            <MediaCard
              cardTitle={"IBM Cloud Pak 4 Data"}
              cardBody={
                "Introducing different connectors on the environment, building there customised frontend eventually helping them to run end to end frontend."
              }
              inMode={findMode}
            />
          </Card>
        </Grid>
        <Grid md={1}></Grid>
        <Grid className="rightGrid childrenGrid " sm={11} md={3}>
          <Card>
            <MediaCard
              cardTitle={"Stripe SAP Integration"}
              cardBody={
                "Creating efficient design and developing UI for single-page web applications using frontend technologies incorporating Stripe libraries."
              }
              inMode={findMode}
            />
          </Card>
        </Grid>
        <Grid md={1}></Grid>
        <Grid className="rightGrid childrenGrid " sm={11} md={3}>
          <Card>
            <MediaCard
              cardTitle={"Dev Connect"}
              cardBody={
                "Pioneered a self-learning social networking web application using React.js, Node.js, JSON Web Token(JWT) and MongoDB techniques."
              }
              inMode={findMode}
            />
          </Card>
        </Grid>
      </Grid>
    </div>
    // </div>
  );
};

export default Project;
