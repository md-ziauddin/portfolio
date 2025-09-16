import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import BackArrowIcon from '../components/svg/BackArrowIcon';
import Layout from '../components/Layout';

const ProjectShowcaseTemplate = ({ data, children }) => {
  const { title, date, tags, hero_image } = data.mdx.frontmatter;
  const image = getImage(hero_image);
  

  return (
    <Layout title={title}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="group mb-8 inline-flex items-center font-semibold leading-tight text-sky-300">
            <BackArrowIcon />
            MD Ziauddin
          </Link>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">{title}</h1>
          <p className="mt-2 text-sm text-slate-400">{date}</p>
        </div>

        <div className="my-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-4">Technologies</h2>
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <li key={i}>
                <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">
                  {tag}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {image && (
          <GatsbyImage image={image} alt={title} className="mb-8 rounded-lg" />
        )}

        <div className="prose prose-invert prose-lg max-w-none">
          {children}
        </div>

        
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        hero_image {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;

export default ProjectShowcaseTemplate;
