import { Grid, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import "./home.css";
// import "../Components/images/womenimg";

const Home = () => {
  return (
    <div
      className="container-base-styles background-style"
    >
      <Grid container >
        <Grid xs={12} sm={12} md={6} lg={6} display={{ xs: "block" }} className="container-left-grid container-left-grid-child">
          {/* <div> Hi There!! </div> */}
          {/* <div className="container-left-grid-child">
            {" "}
            Glad to see you !! <span>☺️</span>{" "}
          </div> */}
          <div className="container-left-grid-child">
            {/* {" "} */}
            {/* This is  */}
            <span>VANSHIKA MAHAL </span>
          </div>
          <div className="container-left-grid-child">
            <Typewriter
              options={{
                strings: ["Frontend Engineer", "Software Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </Grid>
        <Grid display={{ xs: "none", sm: "none", md: "block"}} md={6} lg={6} className="container-right-grid">
          <div>
            <img className="container-right-grid-img" src={require("../images/womentech.png")} alt="women in tech"/>
          </div>
          {/* <Typography image={require("../images/backdrop.jpg")} /> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
