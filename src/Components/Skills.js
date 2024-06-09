import { Box, Paper, Grid } from "@mui/material";
import "./skills.css";

const Skills = () => {
  const skillSet = [
    { id: "react", imgPath: "react.png", skillName: "React JS" },
    { id: "js", imgPath: "js.png", skillName: "JavaScript" },
    { id: "redux", imgPath: "redux.png", skillName: "Redux" },
    { id: "html", imgPath: "html.png", skillName: "HTML" },
    { id: "css", imgPath: "css.png", skillName: "CSS" },
    { id: "mui", imgPath: "mui.png", skillName: "Material UI" },
  ];

  return (
    <div
      style={{
        backgroundColor: "#01051b",
        borderTop: "1px solid white",
        borderBottom: "1px solid white",
        height: "10%",
        padding: "5%",
      }}
    >
      <div className="header-skills">Skills</div>

      <Grid container columnSpacing={2} sx={{pl: "1%", pt: "4%"}}>
        {skillSet.map((skill) => (
          <Grid key={skill.skillName} md={2} sm={4} xs={6} className="child-grid-elements">
            <Box
             key={skill.skillName}
              sx={{
                // display: "flex",
                // flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 100,
                  height: 100,
                },
              }}
            >
              <Paper
               key={skill.skillName}
                sx={{
                  color: "#01051b",
                  backgroundColor: "white",
                  alignContent: "center",
                  textAlign: "center",
                  boxShadow: "0px 4px 5px -2px rgb(70 51 224), 0px 7px 10px 1px rgb(255 255 255 / 11%), 0px 2px 16px 1px rgb(255 255 255 / 28%)"
                }}
                elevation={7}
                square={false}
              >
                <div key={skill.imgPath}>
                  <img  key={skill.imgPath}
                    height="30px"
                    width="30px"
                    // style={{ color: "white" }}
                    src={require(`../images/${skill.imgPath}`)}
                    alt={skill.skillName}
                  />
                </div>
                <div key={skill.skillName}>{skill.skillName}</div>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>

    </div>
  );
};

export default Skills;
