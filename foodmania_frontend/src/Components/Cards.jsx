import { Link, Box, Card, CardMedia, CardContent, Button, Typography, CardActions } from '@mui/material'



const Cards = ({ myDirection, title, excerpt, image, blogHref }) => {
    const baseUrl = "http://127.0.0.1:8000/"; // Replace with your API base URL
    const absoluteImageUrl = new URL(image, baseUrl).toString();

// This will give you the absolute URL

    return (
        <Box mt={3}>
            <Link href={blogHref} sx={{ textDecoration: 'none' }}>
                <Card>
                    <Box sx={{ display: { xs: 'block', sm: `${myDirection}`, md: `${myDirection}` }, flexDirection: 'row' }}>
                        <CardMedia component={'img'} height='300' image={absoluteImageUrl} alt={title}
                            sx={{
                                width: '400px', cursor: 'pointer', "&:hover": {
                                    opacity: 0.8,
                                    boxSizing: 'border-box',
                                    zIndex: 1,
                                    transition: `all 0.50s ease`
                                }
                            }} />
                        <CardContent sx={{ minHeight: '260px' }}>
                            <Typography gutterBottom variant='h5' align='center'>
                                {title}
                            </Typography>
                            <Typography  variant='h6' color="text.secondary" >
                                {excerpt}
                            </Typography>
                            <CardActions>
                                <Button sx={{ color: 'tomato' }} size="large">
                                    Share
                                </Button>
                                <Button sx={{ color: 'tomato' }} size="large">
                                    Learn More
                                </Button>
                            </CardActions>
                        </CardContent>
                    </Box>
                </Card>
            </Link>
        </Box>

    )
}

export default Cards