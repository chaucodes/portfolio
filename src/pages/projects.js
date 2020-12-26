import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageLinks from '../components/PageLinks';
import CardList from '../components/CardList';

function ProjectsPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Projects'
      />
      <section className='w-screen'>
        <h1 className='text-4xl text-center mb-10'>Projects Page</h1>
        <CardList />
      </section>

      <div>
        <PageLinks />
      </div>
    </Layout>
  );
}

export default ProjectsPage;
