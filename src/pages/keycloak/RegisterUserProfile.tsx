import React, { useRef, memo, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';
import bg2 from '@/assets/images/bg_2.jpg'
import bg3 from '@/assets/images/bg_3.jpg'
import bg4 from '@/assets/images/bg_4.jpg'
import bg5 from '@/assets/images/bg_5.jpg'

type KcContext_RegisterUserProfile = Extract<KcContextType, { pageId: 'register-user-profile.ftl' }>;

export const RegisterUserProfile = memo(
    ({ kcContext, ...props }: { kcContext: KcContext_RegisterUserProfile } & KcProps) => {
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
                RegisterUserProfile
            </div>
        );
    },
);

export default RegisterUserProfile;