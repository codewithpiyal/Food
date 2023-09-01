import { Link, Box, Card, CardMedia, CardContent, Button, Typography, CardActions } from '@mui/material'



const Cards = ({ myDirection, title, excerpt, image, hrefBlog }) => {
    return (
        <Box mt={3}>
            <Link href={hrefBlog} sx={{ textDecoration: 'none' }}>
                <Card>
                    <Box sx={{ display: { xs: 'block', sm: `${myDirection}`, md: `${myDirection}` }, flexDirection: 'row' }}>
                        <CardMedia component={'img'} height='300' image={image} alt='pic'
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
                            <Typography gutterBottom variant='h7' align='center'>
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