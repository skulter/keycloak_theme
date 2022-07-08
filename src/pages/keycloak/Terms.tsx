import { useRef, memo } from 'react';
import type { KcProps } from 'keycloakify/lib/components/KcProps';
import type { KcContextType } from '@/utils/keycloakManager';

type KcContext_Terms = Extract<KcContextType, { pageId: 'terms.ftl' }>;

export const Terms = memo(
    ({ kcContext, ...props }: { kcContext: KcContext_Terms } & KcProps) => {
        const form = useRef<HTMLFormElement>(null);
        const { url, message, realm, } = kcContext;
        const isSessionOut = message?.summary.includes('attempt timed out') || message?.summary.includes('Timeout');
        console.log("Terms", kcContext);
        console.warn('message =>', message);

        return (
            <div>
                Terms
                (테스트중 해당 파일이 보이면 문의 해주세요.)
            </div>
        );
    },
);

export default Terms;
