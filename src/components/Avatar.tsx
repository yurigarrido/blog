import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  cy?: string;
  teste?: boolean
}

export function Avatar({
  hasBorder = true,
  src,
  alt,
  cy,
  ...props
}: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
      data-cy={cy}
      {...props}
    />
  )
}
