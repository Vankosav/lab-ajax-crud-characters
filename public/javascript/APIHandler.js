class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({
      baseURL: this.BASE_URL
    })
  }

  getFullList() {
    return this.api.get('/characters')
        .then((response) => {
            console.log('All Characters Response:', response); // Log the entire response object
            console.log('All Characters Data:', response.data); // Log the data property of the response

            return response.data; // Return the data for further processing if needed
        })
        .catch((error) => {
            console.error('Error while fetching all characters', error);
            throw error; // Rethrow the error to handle it outside of this method if necessary
        });
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

