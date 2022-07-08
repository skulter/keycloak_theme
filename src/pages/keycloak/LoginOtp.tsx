import React, { useRef, memo, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';

type KcContext_LoginOtp = Extract<KcContextType, { pageId: 'login-otp.ftl' }>;

export const LoginOtp = memo(
    ({ kcContext, ...props }: { kcContext: KcContext_LoginOtp } & KcProps) => {
        const form = useRef<HTMLFormElement>(null);
        const { url, message, realm, } = kcContext;
        console.log("LoginOtp", kcContext);
        console.warn('message =>', message);

        return (
            <div>
                LoginOtp
            </div>
        );
    },
);

export default LoginOtp;
