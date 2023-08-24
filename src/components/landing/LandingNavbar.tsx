import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

interface LandingNavbarProps {
  onAboutClick: () => void;
}

const pages = ["About", "Projects", "Skills"];

const LandingNavbar: React.FC<LandingNavbarProps> = ({ onAboutClick }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollTop === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isScrolled ? "#333" : "transparent",
        transition: "background-color 0.3s ease-in-out",
        boxShadow: isScrolled ? "none" : "0 0 0 0",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            ></IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: isScrolled ? "white" : "inherit",
              textDecoration: "none",
              opacity: isScrolled ? 1 : 0.4,
              transition:
                "font-size 0.3s ease-in-out, opacity 0.3s ease-in-out",
              fontSize: isScrolled ? "26px" : "30px",
              cursor: "pointer",
            }}
          >
            William Kuheleloa
          </Typography>

          <Box
            sx={{
              ml: "auto",
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  m: 3,
                  fontFamily: "monospace",
                  fontWeight: 200,
                  letterSpacing: ".3rem",
                  color: isScrolled ? "white" : "inherit",
                  textDecoration: "none",
                  transition: "font-size 0.3s ease-in-out",
                  fontSize: isScrolled ? "16px" : "20px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  if (page === "About") {
                    onAboutClick();
                  }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default LandingNavbar;
