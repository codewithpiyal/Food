import { Typography, styled, Box, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Category = () => {
    
  

    const [categ, setCateg] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/categories/')
                setCateg(res.data)

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
        borderRadius: '100%',
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
        <Stack Container direction={'row'} mt={4} spacing={3} ml={3} sx={{ overflow: 'auto' }}>
            {
                categ.map((cElem) => {
                    
                    return (
                        <CardBox key={cElem.id}>
                            <StyledCard sx={cElem.image} />
                            <StyledTypography>{cElem.name}</StyledTypography>
                        </CardBox>
                    )
                })
            }


        </Stack>
    )
}

export default Category 