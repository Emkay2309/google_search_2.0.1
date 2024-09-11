import React from 'react';

// Define the type for props
interface AvatarProps {
  url: string;
  className?: string; 
}

const Avatar: React.FC<AvatarProps> = ({ url, className = '' }) => {
  return (
    <img
      loading="lazy"
      src={url}
      className={`rounded-full hover:cursor-pointer transition duration-300 transform hover:scale-110 ${className}`}
      alt="Md Mohsin - Software Developer"
      width={32}
      height={32}
    />
  );
}

export default Avatar;
