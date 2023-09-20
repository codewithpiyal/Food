import { Container, Grid, styled, Box, Typography } from '@mui/material'
import Category from './Category'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Body = () => {
    const [bodydata, setBodyData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/categoriesbasedpopularblog/popular/')
                setBodyData(res.data)

            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
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
    }))
    const baseUrl = 'http://127.0.0.1:8000';
    return (
        <Container>
            <Grid container direction={'row'} columnSpacing={2} rowSpacing={2}>
                {bodydata.map((cElem) => {
                    return (
                        <Grid item md={3} xs={6} key={cElem.id}>

                            <StyledCard sx={{ backgroundImage: `url(${baseUrl}${cElem.image})` }}>
                                <StyledWrapper>
                                    <StyledTypography>{cElem.title}</StyledTypography>
                                </StyledWrapper>

                            </StyledCard>


                        </Grid>
                    )
                })}

            </Grid>
            <Category />
        </Container>
    )
}

export default Body