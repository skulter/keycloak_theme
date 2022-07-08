import { useRef, memo } from 'react';
import styled from 'styled-components';
import { Box, Button, FormControl, Grid, InputLabel, OutlinedInput, Typography } from '@mui/material';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';
import Layout from '@/layouts/Layout';

type KcContext_LoginUpdatePassword = Extract<KcContextType, { pageId: 'login-update-password.ftl' }>;

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

export const LoginUpdatePassword = memo(
  ({ kcContext, ...props }: { kcContext: KcContext_LoginUpdatePassword } & KcProps) => {
    const form = useRef<HTMLFormElement>(null);
    const { url, message, realm, } = kcContext;

    const handleSubmit = () => {
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
          <Typography variant='h5' >Password Update</Typography>
        </Grid>
        <LoginForm ref={form} method="post" action={url.loginAction}>

          <Grid item sx={{ alignItems: 'center', flexDirection: 'column' }}>
            <Grid item>
              <FormControl sx={{ marginBottom: 2, width: "100%" }} variant="outlined">
                <InputLabel >
                  New Password
                </InputLabel>
                <OutlinedInput
                  type="password"
                  id="password-new"
                  name="password-new"
                  size="medium"
                  label='New Password'
                />
              </FormControl>
              <FormControl sx={{ marginBottom: 2, width: "100%" }} variant="outlined">
                <InputLabel>
                  Confirm password
                </InputLabel>
                <OutlinedInput
                  id="password-confirm"
                  name="password-confirm"
                  type="password"
                  size="medium"
                  label='Confirm password'
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

export default LoginUpdatePassword;
