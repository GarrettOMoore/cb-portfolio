import { useStaticQuery, graphql } from 'gatsby'

const useLanding = () => {
  const landing = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "landing.jpg" }) {
        sharp: childImageSharp {
          resize(width: 600, height: 600) {
            src
          }
        }
      }
    }
  `)
  return landing
}

export default useLanding
