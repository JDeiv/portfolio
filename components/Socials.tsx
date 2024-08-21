import { FC } from "react";
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/JDeiv?tab=repositories"
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/david-jefferson7/"
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/jdeiv_7?igsh=b3R5d2o1djEyajE2"
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
