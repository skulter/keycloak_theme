import { useRef, memo } from 'react';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';

type KcContext_RegisterUserProfile = Extract<KcContextType, { pageId: 'register-user-profile.ftl' }>;

export const RegisterUserProfile = memo(
    ({ kcContext, ...props }: { kcContext: KcContext_RegisterUserProfile } & KcProps) => {
        const form = useRef<HTMLFormElement>(null);
        const { url, message, realm, } = kcContext;
        const isSessionOut = message?.summary.includes('attempt timed out') || message?.summary.includes('Timeout');
        console.log("RegisterUserProfile", kcContext);
        console.warn('message =>', message);

        return (
            <div>
                RegisterUserProfile
                (테스트중 해당 파일이 보이면 문의 해주세요.)
            </div>
        );
    },
);

export default RegisterUserProfile;
