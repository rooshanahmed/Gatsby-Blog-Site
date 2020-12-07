import React from 'react'
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import Layout from '../layout/Layout'
import moment from 'moment';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export interface BlogProps {
    pageContext: any
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        marginTop: '120px',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    title: {
        fontFamily: 'Comfortaa',
        fontSize: '54px',
        fontWeight: 'bold'
    },
    subText: {
        fontWeight: 'bold',
        fontSize: '20px',
        marginTop: '20px',
        marginBottom: '20px',
    }
}));

const BlogPage: React.SFC<BlogProps> = ({ pageContext }) => {
    const classes = useStyles();
    const blog = pageContext;
    
    return(
        <div>
            <Layout title="Blogs Hub">
                <div className={classes.root}>
                    <Typography className={classes.title}>{blog.title}</Typography>
                    <p>{moment(blog.publishedDate, 'YYYY MM DD hh:mm').fromNow()}</p>
                    <Typography>{documentToReactComponents(JSON.parse(blog.body))}</Typography>
                    <img src={blog.imageUrl} alt={blog.title} />
                    <Typography className={classes.subText}>Author: {blog.author}</Typography>
                </div>
            </Layout>
        </div>
    )
}
export default BlogPage;