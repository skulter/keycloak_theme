import React, { useState, useRef, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';
import facebook from '@/assets/images/facebook.png';
import google from '@/assets/images/google.png';
import github from '@/assets/images/github.png';
import microsoft from '@/assets/images/microsoft.png';

type KcContext_Login = Extract<KcContextType, { pageId: 'login.ftl' }>;

const StyledLogin = styled(Grid)`
  min-width: 100vw;
  min-height: 100vh;
  background-color: rgb(222, 230, 240);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginFormContainer = styled(Grid)`
    box-shadow: 1px 1px 2px 1.5px gray;
    /* border-radius: 5px; */
    /* border : 2px solid grey; */
    background-color: white;
    justify-content: center;
    width: 30rem;
    /* height:35rem; */
    display: flex;
    flex-direction: column !important;
    align-items: center;
`

const LoginForm = styled.form`
  width: 25rem;
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

const SocialForm = styled('a')`
/* border: 1px solid grey; */
border-radius: 30%;
background-color: white;
height:4rem;
`

const returnImg = (data: string): string => {
  switch (data) {
    case "google": return google
    case "facebook": return facebook
    case "github": return github
    case "microsoft": return microsoft
    default: return google
  }
}

export const Login = memo(
  ({ kcContext, ...props }: { kcContext: KcContext_Login } & KcProps) => {
    const { t } = useTranslation();
    const form = useRef<HTMLFormElement>(null);
    const { social, url, message, realm, } = kcContext;
    const isSessionOut = message?.summary.includes('attempt timed out') || message?.summary.includes('Timeout');

    console.log(kcContext);

    const handleSubmit = () => {
      console.log(form);
      form?.current?.submit();
    };
    const test = {
      displayInfo: true,
      providers: [
        {
          displayName: "Google",
          providerId: "google",
          loginUrl: "/auth/realms/test/broker/google/login?client_id=account-console&tab_id=0ncS40QMm5Q&session_code=OacQkf8KlbI6tefn7E5pDiTte7MTKHE5Qlenk1IWp5o",
          iconClasses: "fa fa-google",
          alias: "google"
        }
      ]
    }

    useEffect(() => {
      if (message?.summary === 'emailSentMessage') {
        // toast.success(<Toast title={t('success.send.reset.password.email')} message={t('success.send.reset.password.email.default')} />);
      } else if (message?.summary === 'expiredActionTokenSessionExistsMessage') {
        // toast.error(<Toast title={t('error.session.expired')} message={t('error.session.expired.default')} />);
      } else if (message?.summary === 'accountUpdatedMessage') {
        // toast.success(<Toast title={t('success.account.update')} message={t('success.account.update.message')} />);
      }
    }, []);

    return (
      <StyledLogin container>
        <LoginFormContainer item>
          <Grid display='flex' sx={{
            marginTop: '3rem',
            justifyContent: 'center'
          }} >
            <Typography variant='h4' >Login</Typography>
          </Grid>
          <LoginForm ref={form} method="post" action={url.loginAction}>

            <Grid item sx={{ alignItems: 'center', flexDirection: 'column' }}>
              <Grid item>
                <FormControl sx={{ marginBottom: 2, width: "100%" }} variant="outlined">
                  <InputLabel >
                    username
                  </InputLabel>
                  <OutlinedInput
                    id="username"
                    name="username"
                    size="medium"
                    label='username'
                  />
                </FormControl>
                <FormControl sx={{ marginBottom: 2, width: "100%" }} variant="outlined">
                  <InputLabel>
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="password"
                    name="password"
                    type="password"
                    size="medium"
                    label='password'
                    endAdornment={
                      <InputAdornment position="end">
                        {/* <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton> */}
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
              <LoginButton variant="contained" onClick={() => handleSubmit()}>Login</LoginButton>
            </Grid>
          </LoginForm>
          <Grid container direction='column' alignItems='center'>
            <Grid item>
              <Typography>or</Typography>
            </Grid>
            <Grid container alignContent='center'>
              {/* <Grid item xs={3}>asd</Grid>
              <Grid item xs={3}>asd</Grid>
              <Grid item xs={3}>asd</Grid>
              <Grid item xs={3}>asd</Grid> */}
              <Box>
                {test.providers?.map(provider => (
                  <SocialForm key={provider.displayName} href={provider.loginUrl}>
                    {/* {returnImg(provider.providerId)} */}
                    <img width={30} src={returnImg(provider.providerId)} alt=""></img>
                  </SocialForm>
                ))}
              </Box>
            </Grid>
          </Grid>
        </LoginFormContainer>
      </StyledLogin >
    );
  },
);

export default Login;
