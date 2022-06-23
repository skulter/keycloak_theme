import React, { useRef, memo, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';


type KcContext_LoginUpdateProfile = Extract<KcContextType, { pageId: 'login-update-profile.ftl' }>;

const StyledLogin = styled(Grid)`
  min-width: 100vw;
  min-height: 100vh;
  background-color: rgb(222, 230, 240);
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

const LoginForm = styled.form`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginInput = styled(TextField)`
  width: 20rem;
  /* padding:2rem !important; */
  margin-bottom: 1rem !important;
`;

const LoginButton = styled(Button)`
  background-color: rgb(28, 47, 68)  !important;
  height:2.5rem;
  width: 100%;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 1rem;
  display: flex;
  flex-direction: column !important;
  align-items: center !important;
`

const year = new Date();


export const LoginUpdateProfile = memo(
  ({ kcContext, ...props }: { kcContext: KcContext_LoginUpdateProfile } & KcProps) => {
    const form = useRef<HTMLFormElement>(null);
    const { url, message, realm, user} = kcContext;
    const isSessionOut = message?.summary.includes('attempt timed out') || message?.summary.includes('Timeout');
    console.log(kcContext);
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
            marginTop: '3rem',
            justifyContent: 'center'
          }} >
            <Typography variant='h5' >User Login</Typography>
          </Grid>
          <LoginForm ref={form} method="post" action={url.loginAction}>

            <Grid item sx={{ alignItems: 'center', flexDirection: 'column' }}>
              <Grid item>
                <FormControl sx={{ marginBottom: 2, width: "100%" }} variant="outlined">
                  <InputLabel >
                    Username
                  </InputLabel>
                  <OutlinedInput
                    type="text"
                    id="username"
                    name="username"
                    size="medium"
                    label='Username'
                    value={user.username}
                    readOnly
                  />
                </FormControl>
                <FormControl sx={{ marginBottom: 2, width: "100%" }} variant="outlined">
                  <InputLabel >
                    Email
                  </InputLabel>
                  <OutlinedInput
                    type="text"
                    id="email"
                    name="email"
                    size="medium"
                    label='Email'
                    value={user.email}
                    readOnly
                  />
                </FormControl>
                <FormControl sx={{ marginBottom: 2, width: "100%" }} variant="outlined">
                  <InputLabel >
                    Firstname
                  </InputLabel>
                  <OutlinedInput
                    type="text"
                    id="firstName"
                    name="firstName"
                    size="medium"
                    label='Firstname'
                  />
                </FormControl>
                <FormControl sx={{ marginBottom: 2, width: "100%" }} variant="outlined">
                  <InputLabel>
                    Lastname
                  </InputLabel>
                  <OutlinedInput
                    type="text"
                    id="lastName"
                    name="lastName"
                    size="medium"
                    label='Lastname'
                  />
                </FormControl>
              </Grid>
              <LoginButton variant="contained" onClick={() => handleSubmit()}>Login</LoginButton>
            </Grid>
          </LoginForm>
        </LoginFormContainer>
        <Footer >
          <Grid item><Typography>{year.getFullYear()} CLOUDMATE Corp. All Rights Reserved.</Typography></Grid>
          <Grid item><a href='https://who.cloudmt.co.kr/privacypolicy' target='_blank' rel='noreferrer'><Typography>Privacy Policy</Typography></a></Grid>
          <Grid item><Typography>Cookie Policy</Typography></Grid>
        </Footer>
      </StyledLogin >
    );
  },
);

export default LoginUpdateProfile;
