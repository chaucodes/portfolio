import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import CardList from '../components/CardList';

function ProjectsPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Projects'
      />
      <section className='justify-center mb-32'>
        <h1 className='text-5xl text-center mb-10'>Projects Page</h1>
        <CardList />
      </section>
    </Layout>
  );
}

export default ProjectsPage;
