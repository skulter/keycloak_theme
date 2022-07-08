import React, { useRef, memo, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';

type KcContext_LoginConfigTotp = Extract<KcContextType, { pageId: 'login-idp-link-confirm.ftl' }>;

export const LoginConfigTotp = memo(
    ({ kcContext, ...props }: { kcContext: KcContext_LoginConfigTotp } & KcProps) => {
        const { url, message, realm, } = kcContext;
        const isSessionOut = message?.summary.includes('attempt timed out') || message?.summary.includes('Timeout');
        console.log("LoginConfigTotp", kcContext);
        console.warn('message =>', message);
        return (
            <div>
                LoginConfigTotp
            </div>
        );
    },
);

export default LoginConfigTotp;
