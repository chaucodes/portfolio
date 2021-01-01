/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import photo from '../images/justin.jpg';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SocialLinks from '../components/SocialLinks';

import { data } from '../data/data';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Home'
      />
      <section className='justify-center'>
        <div id='picture' className='flex justify-center mb-4'>
          <img
            src={photo}
            alt='portrait'
            className='w-3/6 md:6/12 h-3/6 rounded-full mb-0'
          />
        </div>
        <div
          id='bio'
          className='flex flex-col justify-center content-center m-0'
        >
          <h1 className='text-2xl mb-3 font-bold text-center'>
            Hello, I'm {data.name}{' '}
          </h1>
          <p className='w-3/4 mx-auto text-center'>{data.description}</p>
        </div>
        <div>
          <div id='links' className='mt-8'>
            <SocialLinks />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
