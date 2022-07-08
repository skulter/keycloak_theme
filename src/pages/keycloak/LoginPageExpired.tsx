import { memo } from 'react';
import styled from 'styled-components';
import { Box, Button, Grid, Typography } from '@mui/material';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';
import Layout from '@/layouts/Layout';


type KcContext_LoginPageExpired = Extract<KcContextType, { pageId: 'login-page-expired.ftl' }>;

const LoginButton = styled(Button)`
  background-color: rgb(28, 47, 68)  !important;
  height:2.5rem;
  width: 100%;
  margin-bottom: 1rem !important;
`;

export const LoginPageExpired = memo(
  ({ kcContext, ...props }: { kcContext: KcContext_LoginPageExpired } & KcProps) => {
    const { url, message, realm, }: { url: any } & any = kcContext;

    return (
      <Layout >
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
      </Layout >
    );
  },
);

export default LoginPageExpired;
