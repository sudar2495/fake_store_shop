import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <div className="header">
        <header>
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="title" className={classes.title}>
                  Fake Store React Ecommerce
                </Typography>
                <Button color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </Button>
                <Button color="inherit">
                  <AccountCircleOutlinedIcon />
                </Button>
                <Button color="inherit">Login / Signup</Button>
              </Toolbar>
            </AppBar>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
