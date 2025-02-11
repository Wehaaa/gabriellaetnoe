export const getHomeData = `
  query GetHomePage {
    page(id: "home", idType: URI) {
      accommodationsSection {
        sectionTitle
        introText
        accommodations {
          name
          imageUrl
          description
          link
        }
      }
      tourismSection {
        sectionTitle
        introText
        places {
          name
          imageUrl
          description
        }
      }
      travelSection {
        sectionTitle
        intro
        mapImageUrl
        sections {
          subtitle
          content
        }
      }
      participerSection {
        sectionTitle
        description
      }
    }
    gfForm(id: 1, idType: DATABASE_ID) {
      cssClass
      databaseId
      dateCreated
      formFields {
        nodes {
          databaseId
          type
          ... on TextField {
            label
            isRequired
            description
          }
          ... on SelectField {
            label
            isRequired
            description
            choices {
              text
              value
            }
          }
          ... on TextAreaField {
            label
            isRequired
            description
          }
        }
      }
      pagination{
        lastPageButton {
          text
          type
        }
      }
      title
    }
  }
`;