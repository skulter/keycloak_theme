import { useRef, memo } from 'react';
import styled from 'styled-components';
import { Box, Button, FormControl, Grid, InputLabel, OutlinedInput, Typography } from '@mui/material';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';

import facebook from '@/assets/images/facebook.png';
import google from '@/assets/images/google.png';
import github from '@/assets/images/github.png';
import microsoft from '@/assets/images/microsoft.png';
import RightArea from '@/layouts/RightArea';
import Layout from '@/layouts/Layout';

type KcContext_Login = Extract<KcContextType, { pageId: 'login.ftl' }>;

const LoginForm = styled.form`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginButton = styled(Button)`
  background-color: rgb(28, 47, 68)  !important;
  height:2.5rem;
  width: 100%;
`;

const returnImg = (data: string): string => {
  switch (data) {
    case "google": return google
    case "facebook": return facebook
    case "github": return github
    case "saml": return microsoft
    default: return google
  }
}


const year = new Date();


export const Login = memo(
  ({ kcContext, ...props }: { kcContext: KcContext_Login } & KcProps) => {
    const form = useRef<HTMLFormElement>(null);
    const { social, url, message, realm, } = kcContext;
    const isSessionOut = message?.summary.includes('attempt timed out') || message?.summary.includes('Timeout');
    console.log(kcContext);
    console.warn('message =>', message);

    const handleSubmit = () => {
      form?.current?.submit();
    };

    const test = {
      "displayInfo": true,
      "providers": [
        {
          "displayName": "GitHub",
          "providerId": "github",
          "loginUrl": "/realms/test-realm/broker/github/login?client_id=account-console&tab_id=PxLavC4stUQ&session_code=4ugPR7PppSRWJbkNaRFhDrnl45uP-2jEyrFzrpjjBao",
          "iconClasses": "fa fa-github",
          "alias": "github"
        },
        {
          "displayName": "Microsoft",
          "providerId": "saml",
          "loginUrl": "/realms/test-realm/broker/Microsoft/login?client_id=account-console&tab_id=PxLavC4stUQ&session_code=4ugPR7PppSRWJbkNaRFhDrnl45uP-2jEyrFzrpjjBao",
          "iconClasses": "",
          "alias": "Microsoft"
        },
        {
          "displayName": "Google",
          "providerId": "google",
          "loginUrl": "/realms/test-realm/broker/google/login?client_id=account-console&tab_id=PxLavC4stUQ&session_code=4ugPR7PppSRWJbkNaRFhDrnl45uP-2jEyrFzrpjjBao",
          "iconClasses": "fa fa-google",
          "alias": "google"
        },
        {
          "displayName": "Facebook",
          "providerId": "facebook",
          "loginUrl": "/realms/test-realm/broker/facebook/login?client_id=account-console&tab_id=PxLavC4stUQ&session_code=4ugPR7PppSRWJbkNaRFhDrnl45uP-2jEyrFzrpjjBao",
          "iconClasses": "fa fa-facebook",
          "alias": "facebook"
        }
      ]
    }

    // useEffect(() => {
    //   setOpen(true);

    //   if (message?.type === 'error') {
    //     console.log(message.summary)
    //   }
    //   if (message?.summary === 'emailSentMessage') {
    //     <Snackbar
    //       open={open}
    //       onClose={handleClose}
    //       message={t('success.send.reset.password.email.default')}
    //     />
    //   }
    //   //   toast.success(<Toast title={t('success.send.reset.password.email')} message={t('success.send.reset.password.email.default')} />);
    //   // } else if (message?.summary === 'expiredActionTokenSessionExistsMessage') {
    //   //   toast.error(<Toast title={t('error.session.expired')} message={t('error.session.expired.default')} />);
    //   // } else if (message?.summary === 'accountUpdatedMessage') {
    //   //   toast.success(<Toast title={t('success.account.update')} message={t('success.account.update.message')} />);
    //   // }
    // }, []);

    return (
      <Layout enabledFooter={true} >
        <Grid item md={9}>
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
                    Email ID
                  </InputLabel>
                  <OutlinedInput
                    id="username"
                    name="username"
                    size="medium"
                    label='Email ID'
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
                    label='Password'
                  />
                </FormControl>
              </Grid>
              <LoginButton variant="contained" onClick={() => handleSubmit()}>Login</LoginButton>
            </Grid>

            <Grid container direction='column' alignItems='center' marginTop='2rem'>
              <Grid item marginBottom='2rem'>
                <Typography>or</Typography>
              </Grid>
              <Grid container alignContent='center' justifyContent='space-between'>
                {test.displayInfo && test.providers?.map(provider => (
                  <a id={`social-${provider.displayName}`} type="button" href={provider.loginUrl} key={provider.displayName}>
                    <img width={40} src={returnImg(provider.providerId)} alt={provider.providerId}></img>
                  </a>
                ))}
              </Grid>
            </Grid>
          </LoginForm>
        </Grid>
        <Grid item md={1}
          sx={{
            display: { xs: 'none', md: 'flex' },
            borderLeft: '1px solid rgb(200, 200, 200)',
            height: '450px',
            position: 'absolute',
            left: '50%'
          }} />
        <Grid item md={9} sx={{
          display: { xs: 'none', md: 'flex' },
        }}>
          <RightArea />
        </Grid>
      </Layout>
    );
  },
);

export default Login;
