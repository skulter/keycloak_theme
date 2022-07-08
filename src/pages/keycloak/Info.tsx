import { memo } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';
import Layout from '@/layouts/Layout';

type KcContext_Info = Extract<KcContextType, { pageId: 'info.ftl' }>;

export const Info = memo(
    ({ kcContext, ...props }: { kcContext: KcContext_Info } & KcProps) => {
        const { url, message, realm, } = kcContext;
        return (
            <Layout >
                <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography sx={{ marginBottom: '2rem' }} variant='h5' >Info</Typography>
                    <Box sx={{ width: '100%', color: '#ef2771', padding: '.5rem', textAlign: 'center' }}>
                        {message?.summary}
                    </Box>
                </Grid>
            </Layout>
        );
    },
);

export default Info;
