import { FC } from "react";
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/yourprofile"
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://linkedin.com/in/yourprofile"
  },
  {
    icon: <FaYoutube />,
    path: "https://youtube.com/yourchannel"
  },
  {
    icon: <FaTwitter />,
    path: "https://twitter.com/yourprofile"
  },
];

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const Social: FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link href={social.path} key={index} className={iconStyles} target="_blank" rel="noopener noreferrer">
            <button>{social.icon}</button>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
