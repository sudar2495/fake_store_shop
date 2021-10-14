import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <footer>
          <AppBar position="static" color="primary">
            <Container maxWidth="lg">
              <Toolbar>
                <Typography variant="body1" color="inherit">
                  © 2019 Gistia
                </Typography>
              </Toolbar>
            </Container>
          </AppBar>
        </footer>
      </div>
    </>
  );
};

export default Footer;
