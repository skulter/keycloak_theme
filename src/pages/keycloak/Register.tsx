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
                (테스트중 해당 파일이 보이면 문의 해주세요.)
            </div>
        );
    },
);

export default Register;
