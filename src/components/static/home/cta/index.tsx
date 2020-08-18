import * as React from 'react';
import { Typography, Button, Grid } from '@material-ui/core';
import ProductCard from '../../../utilities/product-card';
import comfeeImage from '../../../../images/comfee.png';
import masterkoolImage from '../../../../images/masterkool.png';
import style from './cta.module.scss';

const CTA = () => {
  return (
    <div className={style.cta}>
      <Typography variant="h3" component="h1" gutterBottom>
        CMT Systems
      </Typography>
      <Typography variant="body1" gutterBottom>
        Coolers, Easy Fit Air Conditioners, Portable Air Conditioners, Wall Mounted Air Conditioners
        and advice.
      </Typography>
      <div className={style.products}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <ProductCard
              title="2.6kW Comfee Air Conditioning"
              subtitle="Easy Fit"
              image={comfeeImage}
              imageAlt="2.6kW Comfee Air Conditioner"
              description="A+++ efficiency rated with adjustable fan speeds and smart assistant integration."
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ProductCard
              title="Masterkool iKool-25 Plus"
              subtitle="Cooler"
              image={masterkoolImage}
              imageAlt="Masterkool iKool-25 Plus"
              description="Stand alone, quiet and reliable unit with a large tank capacity for longer cooling time."
            />
          </Grid>
        </Grid>
      </div>
      <Typography variant="body1" gutterBottom>
        For sales and support email cmtsystemsltd@gmail.com
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component="a"
        href="mailto:cmtsystemsltd@gmail.com"
        className={style.emailButton}
      >
        SEND EMAIL
      </Button>
    </div>
  );
};

export default CTA;
