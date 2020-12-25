import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function ProjectsPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Projects'
      />
      <section>
        <h1>Prjects Page</h1>
      </section>
    </Layout>
  );
}

export default ProjectsPage;
