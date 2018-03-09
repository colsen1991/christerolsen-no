import generelt from '../static/data/generelt.json'

async function getData (payload, fetchPath, importPath, error) {
  if (payload) {
    return {
      ...payload,
      url: generelt.url,
      sidetittel: generelt.tittel
    }
  }

  if (process.client) {
    try {
      const response = await fetch(`/data/${fetchPath}`)
      return await response.json()
    } catch (e) {
      error()
    }
  }

  if (process.server) {
    return require(`../static/data/${importPath}`)
  }
}

export default getData
