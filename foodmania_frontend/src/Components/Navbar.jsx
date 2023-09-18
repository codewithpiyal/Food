import React, { useState } from 'react'
import { AppBar, Box, Drawer, List, Link, ListItem, ListItemButton, styled, TextField, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    })
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
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <>
            <AppBar color='default' position='sticky' elevation={0}>
                <StyledToolbar>
                    <Box flex={{ xs: 25, md: 1 }}>
                        <Link href='http://localhost:3000/detail' sx={{ textDecoration: 'none' }}>
                            <Typography variant='h5' color={'tomato'} sx={{ fontFamily: 'Splash,cursive', textAlign: { xs: 'center', md: 'left' } }}>Foodmania</Typography>
                        </Link>
                    </Box>
                    <MenuBox flex={1}>
                        {MenuItems.map((item) => {
                            return (
                                <Typography variant='body2' key={item.Name}>{item.Name}</Typography>
                            )

                        })}
                    </MenuBox>
                    <Box flex={1}>
                        <TextField sx={{ display: { xs: 'flex', md: 'none' } }} color='warning' label='Search' variant='standard' />
                    </Box>
                    <MenuIcon sx={{ display: { xs: 'flex', md: 'none', cursor: 'pointer' } }}
                        onClick={() => setOpenMenu(!openMenu)} />

                </StyledToolbar>
                <Drawer
                    anchor={'top'}
                    open={openMenu}
                    onClose={() => setOpenMenu(!openMenu)}
                >
                    <List>
                        <ListItem>
                            {MenuItems.map((cElem) => {
                                return (
                                    <ListItemButton key={cElem.Name}>{cElem.Name}</ListItemButton>
                                )
                            })}
                        </ListItem>
                    </List>
                    <TextField sx={{ display: { xs: 'flex', md: 'none' } }} color="warning" label="search" variant='outlined' />
                </Drawer>

            </AppBar>
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: 1, flexDirection: { xs: 'column', md: 'row' } }}>
                <Typography align='center' variant='h5' mr={{ xs: 0, mr: 1 }}>
                    Popular Receipes made for customers
                </Typography>
                <Typography variant='h5' align='center' color={'tomato'} sx={{ fontFamily: 'Splash,cursive' }}>
                    Popular Receipes made for customers
                </Typography>
            </Box>
        </>)
}

export default Navbar