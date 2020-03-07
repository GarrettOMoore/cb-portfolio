import { useStaticQuery, graphql } from 'gatsby'

const useTaipeiPics = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { regex: "/(taipei)/" } }) {
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

export default useTaipeiPics
