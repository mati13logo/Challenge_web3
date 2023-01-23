import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Paper } from '@mui/material';


   const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
  const NFT =  () => {
    const nft = useSelector((state)=> state.nft)
    const nftImg = useSelector((state)=> state.nftImg)
// console.log(nft)
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  return (
    <>
    {nftImg && Object.keys(nft).length > 0?
      <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            0
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={nft.metadata.name}
        subheader="nft creado en el formulario"
      />
      <CardMedia
        component="img"
        height="194"
        image={nftImg}
        alt="nft image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {nft.metadata.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {
              nft.attributes[0].trait_type ? "Atributos" : null
            }
            
            </Typography>
          <Typography paragraph>
            {nft.attributes[0].trait_type? nft.attributes[0].trait_type + ' :' : null} {nft.attributes[0].value? nft.attributes[0].value : null}
          </Typography>
          <Typography paragraph>
            {nft.attributes[1].trait_type? nft.attributes[1].trait_type + ' :' : null} {nft.attributes[1].value? nft.attributes[1].value : null}
          </Typography>
          <Typography paragraph>
            {nft.attributes[2].trait_type? nft.attributes[2].trait_type + ' :' : null} {nft.attributes[2].value? nft.attributes[2].value : null}
          </Typography>
  
        </CardContent>
      </Collapse>
    </Card>
    :
    <Paper variant="outlined" className='paper'>
      <h3>No tienes nft aun</h3>
    </Paper>
    }
    </>
    
    
    
    
  
    )
}

export default NFT