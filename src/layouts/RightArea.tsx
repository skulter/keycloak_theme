import { Grid } from '@mui/material';
import First from '@/assets/images/one.svg'
import Second from '@/assets/images/two.svg'
import Third from '@/assets/images/three.svg'

const randomImg = () => {
    const random = Math.floor(Math.random() * 3)
    switch (random) {
        case 0: return <a target="_blank" href="https://recruit.cloudmt.co.kr"  > <img src={First} alt="" /></a>;
        case 1: return <a target="_blank" href="mailto:contact@cloudmt.co.kr" > <img src={Second} alt="" /></a>;
        case 2: return <a target="_blank" href="https://recruit.cloudmt.co.kr" > <img src={Third} alt="" /></a>;
        default: return <a target="_blank" href="https://recruit.cloudmt.co.kr" > <img src={First} alt="" /></a>;
    }
}

const RightArea = () => {
    return (
        <Grid item md={9} sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center'
        }}>
            {randomImg()}
        </Grid>
    );
};

export default RightArea;