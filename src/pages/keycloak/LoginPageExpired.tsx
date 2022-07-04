import React, { useRef, memo, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';
import bg2 from '@/assets/images/bg_2.jpg'
import bg3 from '@/assets/images/bg_3.jpg'
import bg4 from '@/assets/images/bg_4.jpg'
import bg5 from '@/assets/images/bg_5.jpg'

type KcContext_LoginPageExpired = Extract<KcContextType, { pageId: 'login-page-expired.ftl' }>;

const StyledLogin = styled(Grid)`
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(${bg4});
  /* background-color: rgb(222, 230, 240); */
  display: flex;
  flex-direction: column !important;
  align-items: center;
  justify-content: center !important;
`;

const LoginFormContainer = styled(Grid)`
    box-shadow: 1px 1px 2px 1.5px gray;
    /* border-radius: 5px; */
    /* border : 2px solid grey; */
    background-color: white;
    justify-content: center;
    width: 23rem;
    /* height:35rem; */
    display: flex;
    flex-direction: column !important;
    align-items: center;
    padding: 1rem 2rem !important;
`

const LoginButton = styled(Button)`
  background-color: rgb(28, 47, 68)  !important;
  height:2.5rem;
  width: 100%;
  margin-bottom: 1rem !important;
`;


export const LoginPageExpired = memo(
  ({ kcContext, ...props }: { kcContext: KcContext_LoginPageExpired } & KcProps) => {
    const form = useRef<HTMLFormElement>(null);
    const { url, message, realm, }: { url: any } & any = kcContext;
    const isSessionOut = message?.summary.includes('attempt timed out') || message?.summary.includes('Timeout');
    console.log('LoginPageExpired', kcContext);
    console.warn('message =>', message);


    const handleSubmit = () => {
      console.log(form);
      form?.current?.submit();
    };

    return (
      <StyledLogin container>
        <LoginFormContainer item>
          {message?.type === 'error' &&
            <Box sx={{ width: '100%', color: '#ef2771', border: '1px solid #a0a0a0d8', padding: '.5rem', textAlign: 'center' }}>
              {message?.summary}
            </Box>}

          <Grid display='flex' sx={{
            marginTop: '1rem',
            justifyContent: 'center'
          }} >
            <Typography sx={{ marginBottom: '2rem' }} variant='h5' >페이지가 만료되었습니다.</Typography>
          </Grid>
          <Grid item sx={{ alignItems: 'center', flexDirection: 'column' }}>
            <LoginButton variant="contained" href={url.loginRestartFlowUrl}>로그인 다시하기</LoginButton>
            <LoginButton variant="contained" href={url.registrationAction}>로그인 계속하기</LoginButton>
          </Grid>
        </LoginFormContainer>
      </StyledLogin >
    );
  },
);

export default LoginPageExpired;
