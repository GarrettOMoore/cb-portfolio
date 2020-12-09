import { useStaticQuery, graphql } from 'gatsby'

const useLanding = () => {
  const landing = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "landing.jpg" }) {
        sharp: childImageSharp {
          fixed {
          src
        }
        }
      }
    }
  `)
  return landing
}

export default useLanding
