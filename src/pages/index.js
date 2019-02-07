import React from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = props => {
  const products = get(props, "data.allMarkdownRemark.edges").map(
    edge => edge.node.frontmatter
  ); // note that if using class component this data will exist on this.props
  //map is to return data only from front matter
  console.log(products);
  return (
    <Layout>
      {products.map(product => (
        <li key={product.name}>{product.name}</li>
      ))}
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          html
          headings {
            depth
            value
          }
          frontmatter {
            name
          }
        }
      }
    }
  }
`;
