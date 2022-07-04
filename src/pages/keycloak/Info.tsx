import React, { useRef, memo, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';
import bg2 from '@/assets/images/bg_2.jpg'
import bg3 from '@/assets/images/bg_3.jpg'
import bg4 from '@/assets/images/bg_4.jpg'
import bg5 from '@/assets/images/bg_5.jpg'

type KcContext_Info = Extract<KcContextType, { pageId: 'info.ftl' }>;

const StyledInfo = styled(Grid)`
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(${bg4});
  /* background-color: rgb(222, 230, 240); */
  display: flex;
  flex-direction: column !important;
  align-items: center;
  justify-content: center !important;
`;

const InfoFormContainer = styled(Grid)`
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

export const Info = memo(
    ({ kcContext, ...props }: { kcContext: KcContext_Info } & KcProps) => {
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
            <StyledInfo container>
                <InfoFormContainer item>
                    <Grid display='flex' sx={{
                        marginTop: '1rem',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} >
                        <Typography sx={{ marginBottom: '2rem' }} variant='h5' >Info</Typography>
                        <Box sx={{ width: '100%', color: '#ef2771', border: '1px solid #a0a0a0d8', padding: '.5rem', textAlign: 'center' }}>
                            {message?.summary}
                        </Box>
                    </Grid>
                </InfoFormContainer>
            </StyledInfo >
        );
    },
);

export default Info;
