import React, { FC } from "react";

interface IPropTypes {
  type?: 'circle' | 'rounded',
  size?: 'xs' | 'sm' | 'md' | 'lg',
  image?: string,
  alt?: string,
  hasBadge?: boolean,
  badgeColor?: 'green' | 'red',
  badgeContent?: string,
  badgeClassName?: string,
  className?: string
}

const DsAvatar: FC<IPropTypes> = ({ type = 'circle', size = 'sm', image, alt, hasBadge = false, badgeColor = 'green', badgeContent, className, badgeClassName }) => {

  const badgeClolorClass = badgeColor === 'green' ? 'bg-green-main' : 'bg-red-main';

  return (
    <div className={`avatar avatar-${size} avatar-${type} ${className}`}>
      <img src={image} alt={alt} />
      {
        hasBadge ?
          <span
            className={`badge-avatar ${badgeContent ? 'has-content ' : ''} ${badgeClolorClass} text-white ${badgeClassName}`} title={badgeContent}>
            {badgeContent ? badgeContent : ''}
          </span>
          : null
      }
    </div>
  )

};

export default DsAvatar;