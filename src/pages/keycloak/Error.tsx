import React, { useRef, memo, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';

import facebook from '@/assets/images/facebook.png';
import google from '@/assets/images/google.png';
import github from '@/assets/images/github.png';
import microsoft from '@/assets/images/microsoft.png';
import bg2 from '@/assets/images/bg_2.jpg'
import bg3 from '@/assets/images/bg_3.jpg'
import bg4 from '@/assets/images/bg_4.jpg'
import bg5 from '@/assets/images/bg_5.jpg'


type KcContext_Error = Extract<KcContextType, { pageId: 'error.ftl' }>;

const StyledError = styled(Grid)`
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(${bg4});
  /* background-color: rgb(222, 230, 240); */
  display: flex;
  flex-direction: column !important;
  align-items: center;
  justify-content: center !important;
`;

const ErrorFormContainer = styled(Grid)`
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

const ErrorForm = styled.form`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ErrorButton = styled(Button)`
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
export const Error = memo(
  ({ kcContext, ...props }: { kcContext: KcContext_Error } & KcProps) => {
    const form = useRef<HTMLFormElement>(null);
    const { url, message, realm, } = kcContext;
    console.log('errorPage', kcContext);
    console.warn('message =>', message);

    const handleSubmit = () => {
      form?.current?.submit();
    };

    return (
      <StyledError container>
        <ErrorFormContainer item>
          <Grid display='flex' sx={{
            marginTop: '1rem',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }} >
            <Typography sx={{ marginBottom: '2rem' }} variant='h5' >Error</Typography>
            {message?.type === 'error' &&
              <Box sx={{ width: '100%', color: '#ef2771', border: '1px solid #a0a0a0d8', padding: '.5rem', textAlign: 'center' }}>
                {message?.summary}
              </Box>}
          </Grid>
        </ErrorFormContainer>
      </StyledError >
    );
  },
);

export default Error;
