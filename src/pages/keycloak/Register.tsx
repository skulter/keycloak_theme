import { memo } from 'react';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';

type KcContext_Register = Extract<KcContextType, { pageId: 'register.ftl' }>;

export const Register = memo(
    ({ kcContext, ...props }: { kcContext: KcContext_Register } & KcProps) => {
        const { url, message, realm, } = kcContext;
        console.log("Register", kcContext);
        console.warn('message =>', message);
        return (
            <div>
                Register
            </div>
        );
    },
);

export default Register;
