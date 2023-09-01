import { Box, Container, Stack, styled, Typography } from '@mui/material'


const Footer = () => {
    const MenuBox = styled(Box)({
        display: 'flex',
        gap: 30,
        cursor: 'pointer'
    })
    const MenuItems = [
        { Name: "Home", Link: "#" },
        { Name: "Recipes", Link: "#" },
        { Name: "About Us", Link: "#" },
        { Name: "Subscribe", Link: "#" }
    ]
    return (
        <Box sx={{ bgcolor: 'tomato', height: '200px' }}>
            <Container>
                <Stack direction={'row'}>
                    <MenuBox flex={2}>
                        {MenuItems.map((item) => {
                            return (
                                <Typography variant='body2' color={'white'} key={item.Name}>{item.Name}</Typography>
                            )

                        })}
                    </MenuBox>
                    <Box flex={1} color={'white'} mt={1}>
                        @2023 FoodZone.
                    </Box>
                </Stack>
                <Typography variant='h4' align='center' mt={8} color={'white'}>
                    Always welcome to Foodzone
                </Typography>
            </Container>
        </Box>
    )
}

export default Footer