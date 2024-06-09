import * as React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Slide,
  useScrollTrigger,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import RoofingOutlinedIcon from "@mui/icons-material/RoofingOutlined";
import Face3OutlinedIcon from "@mui/icons-material/Face3Outlined";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import "./materialui.css";

const drawerWidth = "100%";
const navItems = ["Home", "About", "Projects", "Achievements", "Contact"];

function NavigationBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      className="background-style"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const iconsNav = (currItem) => {
    switch (currItem) {
      case "Home":
        return <RoofingOutlinedIcon />;
      case "About":
        return <Face3OutlinedIcon />;
      case "Projects":
        return <DvrOutlinedIcon />;
      case "Achievements":
        return <GradeOutlinedIcon />;
      case "Contact":
        return <ConnectWithoutContactOutlinedIcon />;
      default:
        return;
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  // const home = React.useRef(null);
  // const about = React.useRef(null);
  // const projects = React.useRef(null);
  // const contact = React.useRef(null);

  // console.log(Window)
  // const scrollToSection = (currElement) => {
  //   window.scrollTo({
  //     top: currElement.current.offsetTop,
  //     behaviour: "smooth",
  //   })
  // }

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Slide appear={false} direction="down" in={!trigger}>
          <AppBar className="background-style" component="nav">
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { sm: "block" } }}
                className="navbar-font"
              >
                <Button
                  sx={{
                    mr: 2,
                    //   display: { xs: 'none', md: 'flex' },
                    fontSize: "2rem",
                    fontFamily: "monospace",
                    fontWeight: 900,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  VM
                </Button>
              </Typography>
              {/* </Button> */}

              <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: "#fff", mr: 2 }}>
                    {iconsNav(item)}
                    <Typography variant="span" sx={{ pl: 1 }}>
                      {item}
                    </Typography>
                  </Button>
                ))}
              </Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: "none" } }}
                className="collapse-btn"
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Slide>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            anchor="top"
            sx={{
              display: { sm: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </>
  );
}

export default NavigationBar;
