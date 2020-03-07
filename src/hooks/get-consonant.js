import { useStaticQuery, graphql } from 'gatsby'

const useConsonantPics = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { regex: "/(consonant)/" } }) {
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
  console.log('In Consonant hook: ', data.allFile.edges)
  return data.allFile.edges
}

export default useConsonantPics
