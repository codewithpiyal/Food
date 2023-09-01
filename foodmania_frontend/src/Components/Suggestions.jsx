import { Typography, styled, Box, Stack } from '@mui/material'
import Berger from '../static/Berger.jpg'
import Berdover from '../static/Berdover.jpg'
import Biriyani from '../static/Biriyani.jpg'
import Breadegganish from '../static/Breadegganish.jpg'
import Cake from '../static/Cake.jpg'
import capachino from '../static/capachino.jpg'
import Limecup from '../static/Limecup.jpg'
import Lit from '../static/Lit.jpg'
import Momo from '../static/Momo.jpg'
import Onamola from '../static/Onamola.jpg'
import pancake from '../static/pancake.jpg'

const Suggestions = () => {
    const StyledCard = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',

        overflow: 'hidden',
        width: '100px',
        cursor: 'pointer',
        [theme.breakpoints.up('md')]: {
            height: 100,
        },
        [theme.breakpoints.down('md')]: {
            height: 100,
        },
        "&:hover": {
            opacity: 0.8,
            boxSizing: 'borderBox',
            zIndex: 1,
            transition: `all 0.45s ease`,
        }
    }))
    const StyledTypography = styled(Typography)({
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
    })
    const CardBox = styled(Box)({
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',

    })
    return (
        <Stack container direction={'row'} justifyContent={'center'} alignItems={'center'} mt={4} spacing={3} ml={3} sx={{ overflow: 'auto' }}>
            <CardBox>
                <StyledCard sx={{ backgroundImage: `url(${Berger})` }} />
                <StyledTypography>Berger</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{ backgroundImage: `url(${Berdover})` }} />
                <StyledTypography>Berdover</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{ backgroundImage: `url(${Biriyani})` }} />
                <StyledTypography>Biriyani</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{ backgroundImage: `url(${Breadegganish})` }} />
                <StyledTypography>Breadegganish</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{ backgroundImage: `url(${Cake})` }} />
                <StyledTypography>Cake</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{ backgroundImage: `url(${capachino})` }} />
                <StyledTypography>capachino</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{ backgroundImage: `url(${Limecup})` }} />
                <StyledTypography>Limecup</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{ backgroundImage: `url(${Lit})` }} />
                <StyledTypography>Lit</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{ backgroundImage: `url(${Momo})` }} />
                <StyledTypography>Momo</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{ backgroundImage: `url(${Onamola})` }} />
                <StyledTypography>Onamola</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{ backgroundImage: `url(${pancake})` }} />
                <StyledTypography>pancake</StyledTypography>
            </CardBox>

        </Stack>
    )
}

export default Suggestions