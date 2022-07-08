import React, { useRef, memo, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';
import Layout from '@/layouts/Layout';
type KcContext_Error = Extract<KcContextType, { pageId: 'error.ftl' }>;

export const Error = memo(
  ({ kcContext, ...props }: { kcContext: KcContext_Error } & KcProps) => {
    const form = useRef<HTMLFormElement>(null);
    const { url, message, realm, } = kcContext;
    // console.log('errorPage', kcContext);
    // console.warn('message =>', message);
    return (
      <Layout >
        <Grid display='flex' sx={{
          marginTop: '1rem',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }} >
          <Typography sx={{ marginBottom: '2rem' }} variant='h5' >Error</Typography>
          {message?.type === 'error' &&
            <Box sx={{ width: '100%', color: '#ef2771', padding: '.5rem', textAlign: 'center' }}>
              {message?.summary}
            </Box>}
        </Grid>
      </Layout>
    );
  },
);

export default Error;
