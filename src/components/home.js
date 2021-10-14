import React from "react";
import Layout from "./layout";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        if (response.data && response.data.length > 0) {
          console.log(response.data);
          setProductList(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);

  return (
    <>
      <Layout>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={24}
          style={{ padding: 24 }}
        >
          {productList.map((item, index) => {
            return (
              <>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={4}
                  xl={3}
                  style={{ padding: "15px" }}
                >
                  <Card>
                    <CardActionArea>
                      <CardMedia>
                        <img
                          style={{ width: "450px", height: "450px" }}
                          src={`${item.image}`}
                          alt=""
                        />
                      </CardMedia>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {`${item.title}`}
                        </Typography>
                        <Chip
                          label={`${item.category.toUpperCase()}`}
                          style={{ marginBottom: "10px" }}
                        />
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {`${item.description}`}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Grid container direction="row" alignItems="center">
                        <Grid item xs={6} sm={6} lg={6} xl={6}>
                          <Box
                            component="fieldset"
                            mb={3}
                            borderColor="transparent"
                          >
                            <Typography component="legend">
                              {`${item.rating.count}`} Reviews
                            </Typography>
                            <Rating
                              defaultValue={`${item.rating.rate}`}
                              max={5}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={6} sm={6} lg={6} xl={6}>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h1"
                            style={{ float: "right" }}
                          >
                            {`$${item.price}`}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Layout>
    </>
  );
};

export default Home;
