import { Container, Grid, styled, Box, Typography } from '@mui/material'
import Berger from '../static/Berger.jpg'
import Berdover from '../static/Berdover.jpg'
import Biriyani from '../static/Biriyani.jpg'
import Cake from '../static/Cake.jpg'
import Category from './Category'

const Body = () => {
    const StyledCard = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        cursor: 'pointer',
        [theme.breakpoints.up('md')]: {
            height: 400,
        },
        [theme.breakpoints.down('md')]: {
            height: 200,
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
        color: 'white',
        backgroundColor: 'tomato',
        fontSize: 20,
    })
    const StyledWrapper = styled(Box)(({ theme }) => ({
        [theme.breakpoints.up('md')]: {
            paddingTop: '140%'
        },
        [theme.breakpoints.down('md')]: {
            paddingTop: '40%'
        },
    })

    )
    return (
        <Container>
            <Grid container direction={'row'} columnSpacing={2} rowSpacing={2}>
                <Grid item md={3} xs={6}>

                    <StyledCard sx={{ backgroundImage: `url(${Berger})` }}>
                        <StyledWrapper>
                            <StyledTypography>Burger</StyledTypography>
                        </StyledWrapper>

                    </StyledCard>


                </Grid>
                <Grid item md={3} xs={6}>
                    <StyledCard sx={{ backgroundImage: `url(${Berdover})` }}>
                        <StyledWrapper>
                            <StyledTypography>Berdover</StyledTypography>
                        </StyledWrapper>

                    </StyledCard>
                </Grid>
                <Grid item md={3} xs={6}>
                    <StyledCard sx={{ backgroundImage: `url(${Biriyani})` }}>
                        <StyledWrapper>
                            <StyledTypography>Biriyani</StyledTypography>
                        </StyledWrapper>

                    </StyledCard>
                </Grid>
                <Grid item md={3} xs={6}>
                    <StyledCard sx={{ backgroundImage: `url(${Cake})` }}>
                        <StyledWrapper>
                            <StyledTypography>Cake</StyledTypography>
                        </StyledWrapper>

                    </StyledCard>
                </Grid>

            </Grid>
            <Category />
        </Container>
    )
}

export default Body