import React from 'react';
import Layout from '../layout';
import CTA from '../components/static/home/cta';
import WhatWeDo from '../components/static/home/what-we-do';

export default () => (
  <Layout title="CMT Systems">
    <section>
      <CTA />
    </section>
    <section>
      <WhatWeDo />
    </section>
  </Layout>
);
