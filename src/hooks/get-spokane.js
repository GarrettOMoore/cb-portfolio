import { useStaticQuery, graphql } from 'gatsby'

const useSpokanePics = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { regex: "/(spokane)/" } }) {
        edges {
          node {
            sharp: childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return data.allFile.edges
}

export default useSpokanePics
