import { useRef, memo, useEffect } from 'react';
import styled from 'styled-components';
import { Button, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';
import facebook from '@/assets/images/facebook.png';
import google from '@/assets/images/google.png';
import github from '@/assets/images/github.png';
import microsoft from '@/assets/images/microsoft.png';
import { Link } from 'react-router-dom';


type KcContext_Login = Extract<KcContextType, { pageId: 'login.ftl' }>;

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

    const handleSubmit = () => {
      console.log(form);
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

    useEffect(() => {
      if (message?.summary === 'emailSentMessage') {
        toast.success(<Toast title={t('success.send.reset.password.email')} message={t('success.send.reset.password.email.default')} />);
      } else if (message?.summary === 'expiredActionTokenSessionExistsMessage') {
        toast.error(<Toast title={t('error.session.expired')} message={t('error.session.expired.default')} />);
      } else if (message?.summary === 'accountUpdatedMessage') {
        toast.success(<Toast title={t('success.account.update')} message={t('success.account.update.message')} />);
      }
    }, []);

    return (
      <StyledLogin container>
        <LoginFormContainer item>
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
            <Grid container direction='column' alignItems='center' marginTop='2rem'>
              <Grid item marginBottom='2rem'>
                <Typography>or</Typography>
              </Grid>
              <Grid container alignContent='center' justifyContent='space-between'>
                {test.displayInfo && test.providers?.map(provider => (
                  // <Grid item xs={3} key={provider.displayName}>
                  <a href={provider.loginUrl} key={provider.displayName}>
                    {/* {returnImg(provider.providerId)} */}
                    <img width={40} src={returnImg(provider.providerId)} alt={provider.providerId}></img>
                  </a>
                  // </Grid>
                ))}
              </Grid>
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

export default Login;
