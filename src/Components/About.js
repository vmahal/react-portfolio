import { Grid } from "@mui/material";
import "./about.css";

const About = ({ currMode }) => {

  const findMode = currMode ? "lightMode" : "darkMode";

  return (
    <Grid container>
      <Grid className="center-a-element" xs={12} sm={12} md={4}>
        <img className="about-left-grid-img" src={require('../images/aboutme.png')} alt="about me" />
      </Grid>
      <Grid xs={12} sm={12} md={8}>
        <div className={`about-outer-div-${findMode}`}>
          <div className="padding-class"><strong> Hi There!! 👋🏻 </strong></div>
          <div>
            I'm Vanshika, I am born and brought up in <strong className={`strong-style-${findMode}`}>Delhi</strong>.{" "}
          </div>
          <div className="padding-class">
            During my graduation, I just fell in love with programming which
            just grew over time.
          </div>
          <div>
            And there I am, a frontend engineer with{" "}
            <strong className={`strong-style-${findMode}`}>4 years</strong> of experience.
          </div>
          {/* <div className="padding-class">
        My experience includes work in various technologies such as <strong> React JS,
        React Hooks, Redux, HTML, CSS, JavaScript, Git Version Control</strong>. Along
        with this, I do have the experince of <strong>API integration</strong> to make an end to
        end working application.
      </div> */}
          <div className="padding-class">
            Suprisingly, I possess good communication skills, which allows me to
            closely collaborate with the backend developers to create a finished
            product that too in time.
          </div>
          <div>
            {" "}
            Whenever time permits, I also apply my skills to develop something
            new be it single page applications or end to end projects.{" "}
          </div>

          <div>
            I am very passionate about my work. I can take on practically any
            challenge, no matter how difficult it is and if I don't know how to
            do it, I won't rest until I find the way to solve it.
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default About;
