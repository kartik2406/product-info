Steps followed.

1. Create new gatsby project with default starter
2. Add gatsby-transformer-remark, update gatsby-config.json to include it.
3. Create products folder inside src
4. Add this product folder in gatbsy-config using gatsby-source-filesystem

```js
{
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/products`,
        name: "produts"
      }
    }

```
5. Inside `products` folder, add markdown file for each product, this will be useful when seting up cms, more on this later.  Add 2-3 files with the frontmatter keys, these keys should be common to all files inside product.

6. Goto `http://localhost:8000/___graphql` and run this query
```js
{
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
```

7. Install lodash.
8. Use the same query inside the page that should fetch list of products.




