import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import UsesTable from '../components/UsesTable';

function UsesPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Uses'
      />
      <section className='justify-center'>
        <h1 className='text-5xl text-center mb-10'>Uses</h1>
      </section>

      <section className='w-screen flex justify-center mb-20'>
        <UsesTable header='Desk Setup' />
      </section>

      {/* <section className='w-screen flex justify-center mb-20'>
        <UsesTable header={'My Stack'} />
      </section> */}
    </Layout>
  );
}

export default UsesPage;
