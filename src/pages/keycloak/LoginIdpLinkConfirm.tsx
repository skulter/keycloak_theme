import { useRef, memo } from 'react';
import styled from 'styled-components';
import { Box, Button, Grid, Typography } from '@mui/material';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';
import Layout from '@/layouts/Layout';

type KcContext_LoginIdpLinkConfirm = Extract<KcContextType, { pageId: 'login-idp-link-confirm.ftl' }>;
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
  margin-bottom: 1rem !important;
`;


export const LoginIdpLinkConfirm = memo(
    ({ kcContext, ...props }: { kcContext: KcContext_LoginIdpLinkConfirm } & KcProps) => {
        const form = useRef<HTMLFormElement>(null);
        const { url, message, realm, } = kcContext;
        const isSessionOut = message?.summary.includes('attempt timed out') || message?.summary.includes('Timeout');
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
                    <Typography variant='h5' >Account already exists</Typography>
                </Grid>
                <LoginForm ref={form} method="post" action={url.loginAction} >
                    <Grid item sx={{ alignItems: 'center', flexDirection: 'column' }}>
                        <LoginButton type="submit"
                            name="submitAction"
                            id="updateProfile"
                            value="updateProfile"
                            variant="contained"
                        >
                            updateProfile
                        </LoginButton>
                        <LoginButton type="submit"
                            name="submitAction"
                            id="linkAccount"
                            value="linkAccount"
                            variant="contained"
                        >
                            linkAccount
                        </LoginButton>
                    </Grid>
                </LoginForm>
            </Layout>
        );
    },
);

export default LoginIdpLinkConfirm;
