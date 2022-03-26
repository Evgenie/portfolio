import { useTheme } from '@emotion/react';
import React from 'react'
import { TElementProps } from '../../definitions';
import { CWrap } from './Cursor.styles';

export type IProps = TElementProps & {
    mouseCoords: { x: number, y: number };
    showLoader: boolean;
};

const Cursor: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'desktop', mouseCoords = { x: 0, y: 0 }, showLoader = true, } = props;
    //@ts-ignore
    const theme = { ...useTheme().Cursor };
    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap} style={showLoader ? undefined : {
            transform: `translate(${mouseCoords.x - 21}px, ${mouseCoords.y - 21}px)`,
            display: 'flex',
        }} />
    )
}

export default Cursor;