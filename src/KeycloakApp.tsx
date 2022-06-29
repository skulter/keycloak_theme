import { memo } from 'react';
import { defaultKcProps } from 'keycloakify';
import type { KcContextType } from '@/utils/keycloakManager';

import Login from '@/pages/keycloak/Login';
import LoginUpdatePassword from '@/pages/keycloak/LoginUpdatePassword';
import Error404 from '@/pages/common/Error404';
import './KeycloakApp.scss';
import LoginUpdateProfile from './pages/keycloak/LoginUpdateProfile';
import Register from './pages/keycloak/Register';
import { LoginPageExpired } from './pages/keycloak/LoginPageExpired';
import RegisterUserProfile from './pages/keycloak/RegisterUserProfile';
import Info from './pages/keycloak/Info';
import LoginResetPassword from './pages/keycloak/LoginResetPassword';
import LoginVerifyEmail from './pages/keycloak/LoginVerifyEmail';
import Terms from './pages/keycloak/Terms';
import LoginConfigTotp from './pages/keycloak/LoginConfigTotp';
import LoginIdpLinkConfirm from './pages/keycloak/LoginIdpLinkConfirm';

export const KeycloakApp = memo(({ kcContext }: { kcContext: KcContextType; }) => {
  console.log(kcContext);

  switch (kcContext.pageId) {
    case 'login.ftl':
      return <Login {...{ kcContext, ...defaultKcProps }} />;
    case 'login-update-password.ftl':
      return <LoginUpdatePassword {...{ kcContext, ...defaultKcProps }} />;
    case 'login-update-profile.ftl':
      return <LoginUpdateProfile {...{ kcContext, ...defaultKcProps }} />;
    case "register.ftl":
      return <Register {...{ kcContext, ...defaultKcProps }} />;
    case "register-user-profile.ftl":
      return <RegisterUserProfile {...{ kcContext, ...defaultKcProps }} />;
    case "info.ftl":
      return <Info {...{ kcContext, ...defaultKcProps }} />;
    case "login-reset-password.ftl":
      return <LoginResetPassword {...{ kcContext, ...defaultKcProps }} />;
    case "login-verify-email.ftl":
      return <LoginVerifyEmail {...{ kcContext, ...defaultKcProps }} />;
    case "terms.ftl":
      return <Terms {...{ kcContext, ...defaultKcProps }} />;
    // case "login-otp.ftl":
    //   return <LoginConfigTotp {...{ kcContext, ...defaultKcProps }} />;
    case "login-idp-link-confirm.ftl":
      return <LoginIdpLinkConfirm {...{ kcContext, ...defaultKcProps }} />;
    // case "login-idp-link-email.ftl":
    //   return <LoginIdpLinkEmail {...{ kcContext, ...defaultKcProps }} />;
    case "login-page-expired.ftl":
      return <LoginPageExpired {...{ kcContext, ...defaultKcProps }} />;
    // case "login-config-totp.ftl":
    //   return <LoginConfigTotp {...{ kcContext, ...defaultKcProps }} />;
    default:
      return <Error404 />;
  }
});

export default KeycloakApp;
