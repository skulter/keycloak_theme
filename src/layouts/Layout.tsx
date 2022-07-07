import React, { useRef, memo } from 'react';
import styled from 'styled-components';
import { Box, Button, FormControl, Grid, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';

interface LayoutProps {
    children: any,
    enabledFooter: boolean
}

const Layout = ({ children, enabledFooter }: LayoutProps) => {
    const StyledLogin = styled(Grid)`
  min-width: 100vw;
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(243,244,255,1) 0%, rgba(97,101,165,1) 100%);
  display: flex;
  flex-direction: column !important;
  align-items: center;
  justify-content: center !important;
`;

    const LoginFormContainer = styled(Grid)`
    border-radius: 10px;
    background-color: white;
    justify-content: center;
    width: 50rem;
    display: flex;
    flex-direction: row !important;
    align-items: center;
    padding: 1rem 2rem !important;
`
    const Footer = styled.footer`
  position: absolute;
  bottom: 1rem;
  display: flex;
  flex-direction: column !important;
  align-items: center !important;
`

    const year = new Date();
    return (
        <StyledLogin container>
            <LoginFormContainer container columns={19} spacing={1}
             justifyContent="space-between"
                sx={{
                    width: { md: '50rem', xs: '80%' }
                    
                }}>
                {children}
            </LoginFormContainer>
            {enabledFooter && <Footer >
                <Grid item><Typography>{year.getFullYear()} CLOUDMATE Corp. All Rights Reserved.</Typography></Grid>
                <Grid item><a href='https://who.cloudmt.co.kr/privacypolicy' target='_blank' rel='noreferrer'><Typography>Privacy Policy</Typography></a></Grid>
                <Grid item><Typography>Cookie Policy</Typography></Grid>
            </Footer>}
        </StyledLogin >
    );
};

export default Layout;