import React from 'react';
import PropTypes from 'prop-types';

import gear from '../data/gear';

const UsesTable = ({ header }) => {
  return (
    <div className='md:w-1/2 mx-10'>
      <h1 className='text-3xl text-center mb-10 underline tracking-wide'>
        {header}
      </h1>
      <table className='table-fixed border border-current'>
        <thead>
          <tr className='border border-current'>
            <th className='w-3/4 md:w-screen ... p-5 border border-current'>
              Gear
            </th>
            <th className='w-3/4 md:w-screen ...'>Link</th>
          </tr>
        </thead>
        <tbody>
          {gear.map((i) => (
            <tr key={i.title} className='border border-current'>
              <td className='border border-current p-5'>{i.title}</td>
              <td className='border border-current p-5 text-center'>
                <a
                  className='underline'
                  href={i.link}
                  target='_blank'
                  rel='noreferrer'
                >
                  {i.link}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

UsesTable.propTypes = {
  header: PropTypes.node.isRequired,
};

export default UsesTable;
