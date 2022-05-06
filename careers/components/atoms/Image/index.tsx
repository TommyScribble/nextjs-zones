import NextImage, { ImageProps } from 'next/image'

export const Image = ({ src, alt, ...props }: ImageProps) => (
    <>{src && <NextImage src={src} alt={alt ?? ''} {...props} />}</>
)
