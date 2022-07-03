import {
  Avatar,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const images = [
  { image: "https://v4.mui.com/static/images/image-list/breakfast.jpg" },
  { image: "https://v4.mui.com/static/images/image-list/breakfast.jpg" },
  { image: "https://v4.mui.com/static/images/image-list/breakfast.jpg" },
  { image: "https://v4.mui.com/static/images/image-list/breakfast.jpg" },
  { image: "https://v4.mui.com/static/images/image-list/breakfast.jpg" },
  { image: "https://v4.mui.com/static/images/image-list/breakfast.jpg" },
];

export default function RightBar() {
  const classes = useStyles({});

  return (
    <Container className={classes.container}>
      <Typography gutterBottom>Online Friends</Typography>
      <AvatarGroup max={4}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://mui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://mui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/5.jpg"
        />
      </AvatarGroup>
      <Typography gutterBottom className={classes.topSpace}>
        Gallery
      </Typography>
      <ImageList rowHeight={160} className={classes.imageList} cols={3}>
        {images.map((item) => (
          <ImageListItem key={item.image}>
            <img src={item.image} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography gutterBottom className={classes.topSpace}>
        Categories
      </Typography>
      <Link variant="body1" className={classes.link}>
        Sport
      </Link>
      <Link variant="body1" className={classes.link}>
        Science
      </Link>
      <Divider flexItem />
      <Link variant="body1" className={classes.link}>
        World
      </Link>
      <Link variant="body1" className={classes.link}>
        Entertainment
      </Link>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
  },

  topSpace: {
    marginTop: theme.spacing(2),
  },
}));
