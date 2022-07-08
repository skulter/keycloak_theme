import React, { useRef, memo, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';


type KcContext_LoginIdpLinkEmail = Extract<KcContextType, { pageId: 'login-idp-link-email.ftl' }>;

export const LoginIdpLinkEmail = memo(
    ({ kcContext, ...props }: { kcContext: KcContext_LoginIdpLinkEmail } & KcProps) => {
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
            <div>
                LoginIdpLinkEmail
            </div>
        );
    },
);

export default LoginIdpLinkEmail;
