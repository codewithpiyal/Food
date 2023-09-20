import { Typography, styled, Box, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Suggestions = () => {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/categoriesbasedpopularblog/popular/')
                setPopular(res.data)

            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])


    const baseUrl = 'http://127.0.0.1:8000';

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
            {popular.map((cElem) => {
                return (
                    <div key={cElem.id}>
                        <CardBox >
                            <StyledCard sx={{ backgroundImage: `url(${baseUrl}${cElem.image})` }} />
                            <StyledTypography>{cElem.title}</StyledTypography>
                        </CardBox>
                    </div>
                )
            })}


        </Stack>
    )
}

export default Suggestions