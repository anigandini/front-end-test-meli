let tool = require('./helpers/responseSerializer')
const axios = require('axios')

const API_URL = 'https://api.mercadolibre.com'

module.exports = {
  'getProduct': async (req, res) => {
    const itemUrls = [`${API_URL}/items/${req.params.id}`,`${API_URL}/items/${req.params.id}/description`]
        const productPromises = itemUrls.map(url => axios.get(url))
        return Promise.all(productPromises).then(async (response)=>{
            const productData = response[0].data
            productData.description = response[1].data.plain_text
            const  getCategories = await axios.get(`${API_URL}/categories/${response[0].data.category_id}`)
            const categories = getCategories.data.path_from_root.map((category => category.name))
            return res.status(200).send(tool.responseSerializer('product', productData, categories))
        }).catch((err) => {
            res.status(404).send(err)
        })
  },
  'getSearchResult': async (query: string, res: any) => {
    axios.get(`${API_URL}/sites/MLA/search?q=${query}`)
    .then((response) =>{
            const categories = response.data.available_filters.find(x => x.id ==="category")
            const result = response.data.results.splice(0,4) ? 
              tool.responseSerializer('search', response.data.results.splice(0,4), categories !== undefined ? categories.values.sort((a,b) => b.results - a.results).splice(0,4).map(x => x.name) : null) 
              : "Product not found."
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(404).send(err)
        })
  }
}