import React from 'react';
import SocialLinkItem from './SocialLinkItem';
import {
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Github,
} from '@icons-pack/react-simple-icons';

import { social } from '../data/social';

const SocialLinks = () => {
  return (
    <div className='flex justify-center space-x-10'>
      <SocialLinkItem link={social.instagram}>
        <Instagram size={30} />
      </SocialLinkItem>
      <SocialLinkItem link={social.twitter}>
        <Twitter size={30} />
      </SocialLinkItem>
      <SocialLinkItem link={social.youtube}>
        <Youtube size={30} />
      </SocialLinkItem>
      <SocialLinkItem link={social.github}>
        <Github size={30} />
      </SocialLinkItem>
      <SocialLinkItem link={social.linkedin}>
        <Linkedin size={30} />
      </SocialLinkItem>
    </div>
  );
};

export default SocialLinks;
