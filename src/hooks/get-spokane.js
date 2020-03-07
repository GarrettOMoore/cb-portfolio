import { useStaticQuery, graphql } from 'gatsby'

const useSpokanePics = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "spokaneone" }
        }
      ) {
        edges {
          node {
            sharp: childImageSharp {
              sizes(maxWidth: 300, maxHeight: 300) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
      # allFile(filter: { relativeDirectory: { regex: "/(spokane)/" } }) {
      #   edges {
      #     node {
      #       sharp: childImageSharp {
      #         fluid(maxWidth: 500, maxHeight: 500) {
      #           ...GatsbyImageSharpFluid
      #         }
      #       }
      #     }
      #   }
      # }
    }
  `)
  console.log(data)
  return data.allFile.edges
}

export default useSpokanePics
