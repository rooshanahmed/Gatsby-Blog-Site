import React, { useEffect } from "react"
import { graphql, navigate } from "gatsby"
import Layout from "../layout/Layout"
import {
  Theme,
  makeStyles,
  createStyles,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core"
import Aos from "aos"
import "aos/dist/aos.css"

export interface BlogListProps {
  data: any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 1200,
      marginTop: "120px",
      marginLeft: "120px",
      marginBottom: "20px",
      [theme.breakpoints.down("md")]: {
        marginLeft: "10px",
        marginRight: "10px",
        marginTop: "120px",
      },
    },
    btn: {
      marginLeft: "20px",
      border: "2px solid black",
      width: "200px",
      textTransform: "capitalize",
      marginBottom: "10px",
      "&:hover": {
        backgroundColor: "black",
        color: "#fff",
      },
    },
    text: {
      fontFamily: "Comfortaa",
      fontSize: "24px",
    },
    subText: {
      fontFamily: "Comfortaa",
    },
    mainRoot: {
      backgroundColor: "#D1CECD",
      display: "flex",
    },
  })
)

export const Blogs = (data: any) => {
  const classes = useStyles()
  const blog = data.node
  const link: string = blog.title

  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease" })
  }, [])

  return (
    <div className={classes.mainRoot}>
      <Grid container>
        <Grid container xs={12} sm={12} md={11}>
          <Grid item xs={12}>
            <Card className={classes.root} elevation={30} data-aos="zoom-in-up">
              <CardActionArea
                disableTouchRipple
                onClick={() => {
                  navigate(link)
                }}
              >
                <CardMedia
                  component="img"
                  alt="Blog Post"
                  height="400"
                  image={blog.images.file.url}
                />
                <CardContent>
                  <Typography className={classes.text}>{blog.title}</Typography>
                  <Typography className={classes.subText}>
                    {blog.miniTitle}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  className={classes.btn}
                  disableTouchRipple
                  onClick={() => {
                    navigate(link)
                  }}
                >
                  Read Full Blog
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

const BlogList: React.SFC<BlogListProps> = ({ data }) => {
  const blogs = data.allContentfulBlogPost.edges

  return (
    <Layout title="Blogs Hub">
      {/* <h1>Blogs</h1> */}
      {blogs.map((blog: any) => {
        return Blogs(blog)
      })}
    </Layout>
  )
}
export default BlogList

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
          miniTitle
          images {
            title
            file {
              url
            }
          }
        }
      }
    }
  }
`
