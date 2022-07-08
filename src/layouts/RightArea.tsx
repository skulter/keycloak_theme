import { Grid } from '@mui/material';
import First from '@/assets/images/one.svg'
import Second from '@/assets/images/two.svg'
import Third from '@/assets/images/three.svg'

const randomImg = () => {
    const random = Math.floor(Math.random() * 3)
    console.log(random)
    switch (random) {
        case 0: return First;
        case 1: return Second;
        case 2: return Third;
        default: return First;
    }
}

const RightArea = () => {
    return (
        <Grid item md={9} sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center'
        }}>
            <img src={randomImg()} alt="" />
        </Grid>
    );
};

export default RightArea;