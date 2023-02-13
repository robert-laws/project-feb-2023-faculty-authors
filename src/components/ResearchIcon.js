import React from 'react';

export const ResearchIcon = ({ iconImage, link, altText }) => {
  return (
    <a href={link} rel='noreferrer' target='_blank' className=''>
      <img
        className='h-7 w-auto inline-block ml-4 -mt-2 rounded-md'
        title={altText}
        src={iconImage}
        alt={altText}
      />
    </a>
  );
};
