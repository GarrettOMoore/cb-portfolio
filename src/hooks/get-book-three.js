import { useStaticQuery, graphql } from 'gatsby'

const useBookThreePics = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { regex: "/(book-three)/" } }) {
        edges {
          node {
            sharp: childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  return data.allFile.edges
}

export default useBookThreePics
