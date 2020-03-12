import { useStaticQuery, graphql } from 'gatsby'

const useLotusPics = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { regex: "/(lotus)/" } }) {
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
  console.log('GET SPOKANE TWO QUERY: ', data)
  return data.allFile.edges
}

export default useLotusPics
