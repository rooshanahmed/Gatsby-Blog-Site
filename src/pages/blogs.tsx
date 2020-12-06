import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";

export default function Blogs() {
  return (
    <div>
      <Layout title="Blogs Hub">
        <div></div>
      </Layout>
    </div>
  );
}

export const query = graphql`
  query {
    allContentfulBlogPost {
      nodes {
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
`;
