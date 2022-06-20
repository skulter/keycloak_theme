import React, { useState, useRef, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import bg from '@/assets/images/login-bg.jpg';
import styled from 'styled-components';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';


type KcContext_Login = Extract<KcContextType, { pageId: 'login.ftl' }>;

const StyledLogin = styled(Grid)`
  min-width: 100vw;
  min-height: 100vh;
  /* background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat; */
  background-color: rgb(222, 230, 240);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginFormContainer = styled(Grid)`
    box-shadow: 0 0 6px 2px grey;
    border-radius: 5px;
    background-color: white;
    justify-content: center;
    width: 25rem;
    height: 30rem;
`

const LoginForm = styled.form`
  width: 25rem;
  display: flex;
`;

const LoginInput = styled(TextField)`
  width: 20rem;
  margin-bottom: 8px !important;
`;

const LoginButton = styled(Button)`
  background-color: rgb(28, 47, 68)  !important;
  height:2rem;
  width: 100%;
`;

const SocialForm = styled('form')`
border: 1px solid;
background-color: white;
  width: 20rem;
`

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
        <LoginFormContainer>
          <Grid item>
            <Typography>User Login</Typography>
          </Grid>
          <LoginForm ref={form} method="post" action={url.loginAction}>
            {/* <Box sx={{ width: '60px' }}>
            {test.providers?.map(provider => (
              <SocialForm method="post" action={provider.loginUrl}>
                <Button type='submit'> <i className={provider.iconClasses} aria-hidden="true"></i>{provider.displayName} 로그인</Button>
              </SocialForm>
            ))}
          </Box> */}
            <Grid item direction='column' sx={{ alignItems: 'center' }}>
              <Grid item>
                <label>asd</label>
                <LoginInput
                  id="username"
                  name="username"
                  size="small"
                  label='Email'
                />
              </Grid>
              <Grid item>
                <LoginInput
                  id="password"
                  name="password"
                  type="password"
                  size="small"
                  label='password'
                />
              </Grid>
              <LoginButton variant="contained" onClick={() => handleSubmit()}>Sign in</LoginButton>
            </Grid>
          </LoginForm>
          <Grid container sx={{ height: '10rem' }}>
            <Grid container>
              <Grid item xs={4}>or</Grid>
            </Grid>
            <Grid item xs={12} sx={{ height: '100%' }}>
              <Grid></Grid>
            </Grid>
          </Grid>
        </LoginFormContainer>
      </StyledLogin >
    );
  },
);

export default Login;
