import { Container, Typography, Box, CardMedia, List, ListItemIcon, ListItemText, ListItemButton } from "@mui/material"
import Category from "./Category"
import Burger from '../static/Berger.jpg'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import Suggestions from "./Suggestions"

const DetailsPage = () => {
    return (
        <Container>
            <Category />
            <Typography variant="h3" align="center" mt={4}>
                Title of the Recipe
            </Typography>
            <Typography variant="body2" align="center" color={'GrayText'} p={4}>
                These Receipes may contain afiliat links please read my disclosure policy.
            </Typography>
            <Typography variant="body1" align="center" mt={2}>
                It is a long established fact that a reader will be distracted by the readabl
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CardMedia sx={{ height: '500px', width: '500px' }} component='img' image={Burger} alt='berger' />
            </Box>
            <Typography variant="body1" align="center" mt={2}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
            <Typography variant="h3" align="center" mt={2}>
                Ingredients
            </Typography>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <DoubleArrowIcon />
                        <ListItemText primary='Burger' />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <DoubleArrowIcon />
                        <ListItemText primary='Cheese' />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <DoubleArrowIcon />
                        <ListItemText primary='Onion' />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <DoubleArrowIcon />
                        <ListItemText primary='Burger sauce' />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <DoubleArrowIcon />
                        <ListItemText primary='cake' />
                    </ListItemIcon>
                </ListItemButton>
            </List>
            <Typography variant="body1" align="center" mt={2}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </Typography>
            <Typography variant="h5" color={'white'} bgcolor={'black'} align="center" mt={2}>
                You may also like this
            </Typography>
            <Suggestions />
        </Container>
    )
}

export default DetailsPage