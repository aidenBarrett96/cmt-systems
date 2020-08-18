import * as React from 'react';
import style from './what-we-do.module.scss';
import { Typography, Card, CardContent, Grid } from '@material-ui/core';

const WhatWeDo = () => (
  <div className={style.whatWeDo}>
    <Typography variant="h5" gutterBottom>
      What we do
    </Typography>
    <Grid container spacing={2}>
      <InfoCard title="Coolers" subtitle="Quiet" />
      <InfoCard title="Portable Air Conditioners" subtitle="Quiet" />
      <InfoCard title="Easy Fit Air Conditioners" subtitle="No installation tools needed" />
      <InfoCard title="Wall Mounted Air Conditioners" subtitle="Cost effective" />
    </Grid>
  </div>
);

const InfoCard = ({ title, subtitle }: any) => (
  <Grid item xs={12} sm={6}>
    <Card>
      <CardContent>
        <Typography variant="h6" className={style.title}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default WhatWeDo;
