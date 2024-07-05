import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link } from "@mui/material";
import "./footer.css"

const FooterBot = ({ currMode }) => {

  const findMode = currMode ? "lightMode" : "darkMode";

  return (
    <>
      <div
        className="footer-outer-div"
      >
        <Link href="https://github.com/vmahal"><GitHubIcon className={`icon-style-${findMode}`} sx={{ mr: 5, fontSize: "2rem" }} /></Link>
        <Link href="https://linkedin.com/in/vanshika-mahal-dev-frontend"><LinkedInIcon className={`icon-style-${findMode}`} sx={{ fontSize: "2rem", mr: 5 }} /></Link>
        <Link href="mailto:vanshikamahal19@gmail.com"><EmailOutlinedIcon className={`icon-style-${findMode}`} sx={{ fontSize: "2rem" }} /></Link>
      </div>
      <div className={`copyright-style-${findMode}`}>
        <span >&copy; 2024 Vanshika Mahal</span>
      </div>
    </>
  );
};

export default FooterBot;
