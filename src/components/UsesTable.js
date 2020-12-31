import React from 'react';

import gear from '../data/gear';

const UsesTable = () => {
  return (
    <div className='md:w-1/2'>
      <table className='table-fixed border border-current'>
        <thead>
          <tr className='border border-current'>
            <th className='w-3/4 ... p-5 border border-current'>Gear</th>
            <th className='w-3/4 ...'>Link</th>
          </tr>
        </thead>
        <tbody>
          {gear.map((i) => (
            <tr key={i.title} className='border border-current'>
              <td className='border border-current p-5'>{i.title}</td>
              <td className='border border-current p-5'>
                <a href={i.link} target='_blank' rel='noreferrer'>
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

export default UsesTable;
