const { default: axios } = require("axios");

class APIHandler {
  constructor () {
    this.api = axios.create({
      baseUrl: 'http://localhost:8000'
    });
  }

  getFullList () {
    return this.api.get('/characters')
}

  getOneRegister (characterId) {
    return this.api.get(`/characters/${characterId}`)
  }

  createOneRegister (characterBody) {
   return this.api.post('/characters', characterBody)
  }

  updateOneRegister (characterId, characterBody) {
    return this.api.put(`/characters/${characterId}`, characterBody)
  }

  deleteOneRegister (characterId) {
    return this.api.delete(`/characters/${characterId}`)
  }
}

module.exports = APIHandler;