import { useStaticQuery, graphql } from 'gatsby'

const useSpokanePics = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { regex: "/(spokaneone)/" } }) {
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
  console.log('GET SPOKANE QUERY: ', data)
  return data.allFile.edges
}

export default useSpokanePics
