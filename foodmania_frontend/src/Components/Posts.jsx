import { Box, Typography, Grid, Pagination, Stack } from '@mui/material'
import Cards from './Cards'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Posts = () => {
    const [blog, setBlog] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/blog/')
                setBlog(res.data)

            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    const [post, setPost] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/popularBasedBlogs/')
                setPost(res.data)

            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    return (
        <Box>
            <Typography variant='h4' align='center'>Latest Recipes</Typography>
            <Grid container
                columnSpacing={{ xs: 0, sm: 1, md: 1 }}
                direction={'column'}
            >
                {
                    blog.map((cElem) => {
                        return (
                            <Grid item xs key={cElem.id}>
                                <Cards title={cElem.title} image={cElem.image} excerpt={cElem.excerpt} myDirection={'flex'} />
                            </Grid>
                        )
                    })
                }

            </Grid>
            <Typography variant='h4' bgcolor={'black'} color='white' align='center' mt={4} mb={4}>
                Most Popular
            </Typography>
            <Grid container columnSpacing={{ xs: 0, sm: 1, md: 1 }} direction={'row'}>
                {
                    post.map((cElem) => {
                        return (
                            <Grid item xs={6} md={6} key={cElem.id}>
                                <Cards title={cElem.title} image={cElem.image} blogHref={`/detail/${cElem.slug}`} excerpt={cElem.excerpt} myDirection={'block'} />
                            </Grid>
                        )
                    })
                }


            </Grid>
            <Stack spacing={2} mt={3} mb={3} justifyContent='center' alignItems='center'>
                <Pagination count={10} color='warning' />
            </Stack>
        </Box>
    )
}

export default Posts