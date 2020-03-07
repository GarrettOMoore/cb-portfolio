import { useStaticQuery, graphql } from 'gatsby'

const useFlowerPics = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { regex: "/(tv-flowers)/" } }) {
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

export default useFlowerPics
