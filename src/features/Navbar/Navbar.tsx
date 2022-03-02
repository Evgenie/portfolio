import { useTheme } from '@emotion/react';
import React from 'react'
import { TElementProps } from '../../definitions'
import { CWrap, LinkNav } from './Navbar.styles';

export type IProps = TElementProps;

export const Navbar: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'mobile', langId = 'ru' } = props;

    //@ts-ignore
    const theme = { ...useTheme().Navbar }
    return (
        <CWrap sizeId={sizeId} langId={langId} theme={theme.cwrap}>
            <LinkNav sizeId={sizeId} theme={theme.linknav}>Works</LinkNav>
            <LinkNav sizeId={sizeId} theme={theme.linknav}>About</LinkNav>
            <LinkNav sizeId={sizeId} theme={theme.linknav}>Contacts</LinkNav>
        </CWrap>
    )
}

export default Navbar;