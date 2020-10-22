import React, { useEffect } from 'react';
import Avatars from '@dicebear/avatars';
import sprites from '@dicebear/avatars-avataaars-sprites';

export const Avatar = ({ style }: { style?: React.CSSProperties }) => {
    const imageRef = React.useRef<HTMLImageElement>(null);
    useEffect(() => {
        if (imageRef.current) {
            let avatars = new Avatars(sprites, { style: 'circle' });
            let svg = avatars.create('1');
            imageRef.current.src = `data:image/svg+xml;utf8,${encodeURIComponent(
                svg
            )}`;
        }
    }, []);
    return <img alt="" style={style} ref={imageRef} />;
};
