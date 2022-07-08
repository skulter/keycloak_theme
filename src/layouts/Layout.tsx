import styled from 'styled-components';
import { Grid, Typography } from '@mui/material';
import RightArea from './RightArea';
import bg2 from '../assets/images/bg2.png'
import bg3 from '@/assets/images/bg3.png'
import bg4 from '@/assets/images/bg4.png'


interface LayoutProps {
    children: any,
    enabledFooter?: boolean
}

const Layout = ({ children, enabledFooter }: LayoutProps) => {
    const StyledLogin = styled(Grid)`
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(${bg3}) ;
  background-repeat: no-repeat;
  background-size: cover;
  /* background: linear-gradient(180deg, rgba(243,244,255,1) 0%, rgba(97,101,165,1) 100%); */
  display: flex;
  flex-direction: column !important;
  align-items: center;
  justify-content: center !important;
`;

    const LoginFormContainer = styled(Grid)`
    border-radius: 10px;
    background-color: white;
    justify-content: center;
    width: 50rem;
    display: flex;
    flex-direction: row !important;
    align-items: center;
    padding: 1rem 2rem !important;
`
    const Footer = styled.footer`
  position: absolute;
  bottom: 1rem;
  display: flex;
  flex-direction: column !important;
  align-items: center !important;
`

    const year = new Date();
    return (
        <StyledLogin container>
            <LoginFormContainer container columns={19} spacing={1}
                justifyContent="space-between"
                sx={{
                    width: { md: '75rem', xs: '80%' },
                    height: '35rem'
                }}>
                <Grid item md={9} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Grid item sx={{ maxWidth: '25rem' }}>
                        {children}
                    </Grid>
                </Grid>
                <Grid item md={1}
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        borderLeft: '1px solid rgb(200, 200, 200)',
                        height: '500px',
                        position: 'absolute',
                        left: '50%'
                    }} />
                <RightArea />
            </LoginFormContainer>
            {enabledFooter && <Footer >
                <Grid item><Typography>{year.getFullYear()} CLOUDMATE Corp. All Rights Reserved.</Typography></Grid>
                <Grid item><a href='https://who.cloudmt.co.kr/privacypolicy' target='_blank' rel='noreferrer'><Typography>Privacy Policy</Typography></a></Grid>
                <Grid item><Typography>Cookie Policy</Typography></Grid>
            </Footer>}
        </StyledLogin >
    );
};

Layout.defaultProps = {
    enabledFooter: false
}

export default Layout;