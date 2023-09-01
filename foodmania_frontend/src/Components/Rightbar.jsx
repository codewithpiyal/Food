import { Box, Typography, CardMedia, Card, TextField, IconButton } from '@mui/material'
import Cake from '../static/Cake.jpg'
import { Send as SendIcon } from '@mui/icons-material'


const Rightbar = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant='h5' align='center' mt={5}>
                Hello,Welcome to Foodzone, I am Piyal
            </Typography>
            <CardMedia component={'img'} height='300' image={Cake} alt='burger'
                sx={{
                    width: '400px', cursor: 'pointer', "&:hover": {
                        opacity: 0.8,
                        boxSizing: 'border-box',
                        zIndex: 1,
                        transition: `all 0.50s ease`
                    },
                }} />
            <Typography align='left' variant='body1'>
                {""}
                I enjoy cooking and its my hobby, My best Time spent around the table.{""}
            </Typography>
            <Typography align='left' variant='body1'>
                {""}
                PLease do subscribe and visit us.<br /><a href='http://localhost:3000/'>Read More</a>
            </Typography>
            <Card sx={{ height: '200px', marginTop: 2 }}>
                <Typography align='center' variant='body1'>
                    Ads Here
                </Typography>
            </Card>
            <Typography align='center' color='white' bgcolor='tomato' mt={2}>Subscribe Via Email</Typography>
            <Box sx={{ paddingLeft: 10 }}>
                <TextField label='Enter Your Email' variant='standard' color='warning' />
                <IconButton>
                    <SendIcon sx={{ color: 'tomato', mt: 1 }} />
                </IconButton>
            </Box>
            <Card sx={{ height: '200px', marginTop: 2 }}>
                <Typography align='center' variant='body1'>
                    Ads Here
                </Typography>
            </Card>
            <Card sx={{ height: '200px', marginTop: 2 }}>
                <Typography align='center' variant='body1'>
                    Ads Here
                </Typography>
            </Card>
            <Card sx={{ height: '200px', marginTop: 2 }}>
                <Typography align='center' variant='body1'>
                    Ads Here
                </Typography>
            </Card>
        </Box>
    )
}

export default Rightbar