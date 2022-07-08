import React, { useRef, memo, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';

type KcContext_LoginVerifyEmail = Extract<KcContextType, { pageId: 'login-verify-email.ftl' }>;

export const LoginVerifyEmail = memo(
    ({ kcContext, ...props }: { kcContext: KcContext_LoginVerifyEmail } & KcProps) => {
        const { url, message, realm, } = kcContext;
        console.log("LoginVerifyEmail", kcContext);
        console.warn('message =>', message);

        return (
            <div>
                LoginVerifyEmail
            </div>
        );
    },
);

export default LoginVerifyEmail;
