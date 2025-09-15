const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            internal {
              contentFilePath
            }
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    return;
  }

  const projectShowcaseTemplate = path.resolve(
    `./src/templates/project-showcase-template.js`
  );

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: `/showcase/${node.frontmatter.slug}`,
      component: `${projectShowcaseTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
      },
    });
  });
};