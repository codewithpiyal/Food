import { Box, Stack, Container } from '@mui/material'
import React from 'react'
import Posts from './Posts'
import Rightbar from './Rightbar'
import Body from './Body'

const Main = () => {
    return (
        <>
            <Body />
            <Container>
                <Stack direction={'row'} spacing={1} mt={3}>
                    <Box flex={3}>
                        <Posts />
                    </Box>
                    <Box flex={1} sx={{ xs: 'none', md: 'block' }}>
                        <Rightbar />
                    </Box>

                </Stack>
            </Container>
        </>
    )
}

export default Main