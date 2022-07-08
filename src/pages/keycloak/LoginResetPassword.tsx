import React, { useRef, memo, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';

type KcContext_LoginResetPassword = Extract<KcContextType, { pageId: 'login-reset-password.ftl' }>;

export const LoginResetPassword = memo(
    ({ kcContext, ...props }: { kcContext: KcContext_LoginResetPassword } & KcProps) => {
        const { url, message, realm, } = kcContext;
        console.log("LoginResetPassword", kcContext);
        console.warn('message =>', message);

        return (
            <div>
                LoginResetPassword
                (테스트중 해당 파일이 보이면 문의 해주세요.)
            </div>
        );
    },
);

export default LoginResetPassword;
