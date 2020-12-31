import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageLinks from '../components/PageLinks';
import UsesTable from '../components/UsesTable';

function UsesPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Uses'
      />
      <section className='justify-center'>
        <h1 className='text-4xl text-center mb-10'>Uses</h1>
      </section>

      <section className='w-screen flex justify-center'>
        <UsesTable />
      </section>

      <div>
        <PageLinks />
      </div>
    </Layout>
  );
}

export default UsesPage;
