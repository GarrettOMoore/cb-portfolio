// import { useStaticQuery, graphql } from 'gatsby'

// const getLanding = () => {
//   const landing = useStaticQuery(graphql`
//     query {
//       allFile(filter: { relativeDirectory: { regex: "/(book-one)/" } }) {
//         edges {
//           node {
//             sharp: childImageSharp {
//               fluid(maxWidth: 240, maxHeight: 240) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }
//         }
//       }
//     }
//   `)
//   return landing.allFile.edges
// }

// export default getLanding
