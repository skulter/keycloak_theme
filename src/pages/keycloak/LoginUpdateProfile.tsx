import { useRef, memo } from 'react';
import styled from 'styled-components';
import { Box, Button, FormControl, Grid, InputLabel, OutlinedInput, Typography } from '@mui/material';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';
import Layout from '@/layouts/Layout';

type KcContext_LoginUpdateProfile = Extract<KcContextType, { pageId: 'login-update-profile.ftl' }>;
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



export const LoginUpdateProfile = memo(
  ({ kcContext, ...props }: { kcContext: KcContext_LoginUpdateProfile } & KcProps) => {
    const form = useRef<HTMLFormElement>(null);
    const { url, message, realm, user } = kcContext;
    const isSessionOut = message?.summary.includes('attempt timed out') || message?.summary.includes('Timeout');

    const handleSubmit = () => {
      console.log(form);
      form?.current?.submit();
    };


    return (
      <Layout >
        {message?.type === 'error' &&
          <Box sx={{ width: '100%', color: '#ef2771', border: '1px solid #a0a0a0d8', padding: '.5rem', textAlign: 'center' }}>
            {message?.summary}
          </Box>}

        <Grid display='flex' sx={{
          marginTop: '3rem',
          justifyContent: 'center'
        }} >
          <Typography variant='h5' >Profile Update</Typography>
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
                  value={user.firstName}
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
                  value={user.lastName}
                />
              </FormControl>
            </Grid>
            <LoginButton variant="contained" onClick={() => handleSubmit()}>Update</LoginButton>
          </Grid>
        </LoginForm>
      </Layout >
    );
  },
);

export default LoginUpdateProfile;
