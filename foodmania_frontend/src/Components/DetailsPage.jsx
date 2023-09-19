import { Container, Typography, Box, CardMedia, List, ListItemIcon, ListItemText, ListItemButton } from "@mui/material"
import Category from "./Category"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import Suggestions from "./Suggestions"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const DetailsPage = () => {
    const [blog, setBlog] = useState([])
    const [ingredients, setIngredients] = useState('')
    const { slug } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/api/blogs/${slug}`)
                setBlog(res.data)
                setIngredients(res.data.ingredients)
            } catch (error) {
                console.log(error)
            }
        };
        fetchData()
    }, [slug])
    const BaseUrl = "http://127.0.0.1:8000/"
    return (
        <Container>
            <Category />
            <Typography variant="h3" align="center" mt={4}>
                {blog.title}
            </Typography>
            <Typography variant="body2" align="center" color={'GrayText'} p={4}>
                {blog.excerpt}
            </Typography>
            <Typography variant="body1" align="center" mt={2}>
                {blog.content}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CardMedia sx={{ height: '500px', width: '500px' }} component='img' image={`${BaseUrl}${blog.image}`} alt='berger' />
            </Box>
            <Typography variant="body1" align="center" mt={2}>
                {blog.contentTwo}
            </Typography>
            <Typography variant="h3" align="center" mt={2}>
                {blog.ingredients}
            </Typography>
            <List>
                
                {ingredients.split(',').map((cElem) => {
                    return (
                        <>
                            <ListItemButton key={cElem.id}>
                                <ListItemIcon>
                                    <DoubleArrowIcon />
                                    <ListItemText primary={cElem} />
                                </ListItemIcon>
                            </ListItemButton>
                        </>
                    )
                })}

            </List>
            <Typography variant="body1" align="center" mt={2}>
               {blog.content}
            </Typography>
            <Typography variant="h5" color={'white'} bgcolor={'black'} align="center" mt={2}>
                You may also like this
            </Typography>
            <Suggestions />
        </Container>
    )
}

export default DetailsPage