import React from 'react'
import Star from './star.png'

const MyImage = ({src,height,width,alt,styles,...rest}) => {
    return (
        <img data-testid='image' src={src} height={height} width={width} alt={alt} style={styles} {...rest} /> 
    );
}

export default MyImage
