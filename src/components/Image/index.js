import { useState, forwardRef } from 'react'
import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Image.module.scss';

//Dau 2 cham dung de doi ten 
const Image = forwardRef(({ src, alt, className, fallBack: customFallBack = images.noImage, ...props }, ref) => {
    const handleError = () => {
        setFallback(customFallBack);
    }
    const [fallBack, setFallback] = useState('');

    return <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallBack || src}
        alt={alt}
        {...props}
        onError={handleError} />;
})

export default Image;