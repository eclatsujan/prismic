import Prismic from '@prismicio/client'

export const apiEndpoint = process.env.SERVER_URL;
export const accessToken = ''

// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
//   const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    // ...accessTokenOption,
  }
}

export const linkResolver = (doc) => {
    // URL for a category type
    if (doc.type === 'services') {
      return `/services/${doc.uid}`
    }
  
    // URL for a page type
    if (doc.type === 'page') {
      return `/${doc.uid}`
    }
  
    // Backup for all other types
    return '/'
  }