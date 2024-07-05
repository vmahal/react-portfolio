import { Grid } from "@mui/material";
import Typewriter from "typewriter-effect";
import "./home.css";

const Home = ({ currMode }) => {

  const findMode = currMode ? "lightMode" : "darkMode";
  console.log(findMode);

  return (
    <div
      className={`background-style container-base-styles-${findMode}`}
    >
      <Grid container >
        <Grid xs={12} sm={12} md={6} lg={6} display={{ xs: "block" }}
          className={`container-left-grid-${findMode} container-left-grid-child-${findMode}`}
        >
          <div className={`container-left-grid-child-${findMode}`}>
            <span>VANSHIKA MAHAL </span>
          </div>
          <div className={`container-left-grid-child-${findMode}`}>
            <Typewriter
              options={{
                strings: ["Frontend Engineer", "Software Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </Grid>
        <Grid display={{ xs: "none", sm: "none", md: "block" }} md={6} lg={6} className="container-right-grid">
          <div>
            <img className={`container-right-grid-img-${findMode}`} src={require("../images/womentech.png")} alt="women in tech" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
