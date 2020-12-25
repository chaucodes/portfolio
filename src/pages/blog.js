import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function BlogPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Blog'
      />

      <section>
        <h1>Blog Page</h1>
      </section>
    </Layout>
  );
}

export default BlogPage;
