import React from "react"
import { graphql } from "gatsby"
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
} from "@material-ui/core"

export interface BlogListProps {
  data: any
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    maxWidth: 1200,
    marginTop: "50px",
    marginLeft: "74px",
  },
}))

export const Blogs = ( data: any ) => {
  const classes = useStyles()
  const blog = data.node;

  return (
    <div>
      <Grid container>
        <Grid container xs={12}>
          <Grid item xs={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Blog Post"
                  height="400"
                  image={blog.mediaImages.file}
                />
                <CardContent>
                  <Typography>{blog.title}</Typography>
                  <Typography>{blog.miniTitle}</Typography>
                </CardContent>
              </CardActionArea>
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
      <h1>Blogs</h1>
      {blogs.map((blog: any) => {
        return( Blogs(blog) )
      })}
    </Layout>
  )
}
export default BlogList;

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
          miniTitle
          mediaImages {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
