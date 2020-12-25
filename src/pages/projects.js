import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageLinks from '../components/PageLinks';

function ProjectsPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Projects'
      />
      <section>
        <h1>Projects Page</h1>
      </section>

      <div>
        <PageLinks />
      </div>
    </Layout>
  );
}

export default ProjectsPage;
