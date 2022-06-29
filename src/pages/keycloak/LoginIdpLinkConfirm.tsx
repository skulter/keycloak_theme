import React, { useRef, memo, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';
import bg2 from '@/assets/images/bg_2.jpg'
import bg3 from '@/assets/images/bg_3.jpg'
import bg4 from '@/assets/images/bg_4.jpg'
import bg5 from '@/assets/images/bg_5.jpg'

type KcContext_LoginIdpLinkConfirm = Extract<KcContextType, { pageId: 'login-idp-link-confirm.ftl' }>;

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
  margin-bottom: 1rem;
`;


export const LoginIdpLinkConfirm = memo(
    ({ kcContext, ...props }: { kcContext: KcContext_LoginIdpLinkConfirm } & KcProps) => {
        const form = useRef<HTMLFormElement>(null);
        const { url, message, realm, } = kcContext;
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
                </LoginFormContainer>
            </StyledLogin >
        );
    },
);

export default LoginIdpLinkConfirm;
