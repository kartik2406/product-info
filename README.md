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
8. Use the same query inside the page that should fetch list of products, this data will be passed as props to the component. Use it to display the product list.

9. Setting up CMS
Install these two dependencies `netlify-cms gatsby-plugin-netlify-cms` and add `gatsby-plugin-netlify-cms` to gatsby-config.

10. Create `static` folder at project root, inside it create admin folder.
The admin folder should contain [config.yml](https://www.netlifycms.org/docs/start-with-a-template/)

11. Visit `http://localhost:8000/admin/`, you would be prompted to login with git. Once done you will be shown the CMS UI. Here you will see the products which we have already added as part of previos steps. You can also edit, add , delete products.

12. Once you add or remove products, click on publish to save your changes to master and netlify will trigger a new build , you will be able to see your changes.



