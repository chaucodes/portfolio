import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import BlogItem from '../components/BlogItem';

let eventKey = '0';
export default function Blog() {
  <StaticQuery
    query={graphql`
      query MyQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                date
                slug
                title
              }
              html
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => (
      <>
        <div>
          {allMarkdownRemark.edges.map((i) => (
            <>
              <BlogItem
                title={i.node.frontmatter.title}
                body={i.html}
                eventKey={eventKey++}
              />
              <br />
            </>
          ))}
        </div>
      </>
    )}
  />;
}
