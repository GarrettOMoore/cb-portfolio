import { useStaticQuery, graphql } from 'gatsby'

const useBookTwoPics = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { regex: "/(book-two)/" } }) {
        edges {
          node {
            sharp: childImageSharp {
              fluid(maxWidth: 120, maxHeight: 120) {
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

export default useBookTwoPics
