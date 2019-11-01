import { useStaticQuery, graphql } from 'gatsby'

const useBookOnePics = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { regex: "/(book-one)/" } }) {
        edges {
          node {
            sharp: childImageSharp {
              fluid(maxWidth: 240, maxHeight: 240) {
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

export default useBookOnePics
