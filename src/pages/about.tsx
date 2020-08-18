import * as React from 'react';
import Layout from '../layout';
import { Typography, Button } from '@material-ui/core';

const AboutPage = () => (
  <Layout title="About">
    <Typography variant="h3" component="h1" gutterBottom>
      Who are we?
    </Typography>
    <Typography variant="body1" gutterBottom>
      We sell air conditioning systems and offer professional advice, to get you the best product
      for your needs.
    </Typography>
    <Typography variant="body1" gutterBottom>
      For sales and support email cmtsystemsltd@gmail.com
    </Typography>
    <div style={{ margin: '12px 0' }}>
      <Button
        variant="contained"
        color="primary"
        component="a"
        href="mailto:cmtsystemsltd@gmail.com"
      >
        SEND EMAIL
      </Button>
    </div>
  </Layout>
);

export default AboutPage;
