const { response } = require("express");

//const charactersAPI = new APIHandler('http://localhost:8000');
const charactersAPI = new APIHandler(
  "https://ih-crud-api.herokuapp.com"
)

window.addEventListener('load', () => {
  document
  .getElementById('fetch-all')
  .addEventListener('click', async function (event) {
    const allCharacters = await charactersAPI.getFullList()
    console.log('All Characters:', allCharacters);
  })
  
  document
  .getElementById('fetch-one')
  .addEventListener('click', async function (event) {
      const oneCharacter = charactersAPI.getOneRegister(document.querySelector('[name="character-id"]').value);
      console.log('Single Character', oneCharacter);
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    const characterId = charactersAPI.deleteOneRegister(document.querySelector('[name="character-id-delete"]').value);
        //const deleteResponse = await charactersAPI.deleteOneRegister(characterId);
        console.log(characterId)
        console.log('Character Deleted:', response.data);
});


  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const characterIdToUpdate = document.querySelector('[name="chr-id"]').value;
    const updatedCharacterData = {
      name: document.querySelector('[name="name"]').value,
      occupation: document.querySelector('[name="occupation"]').value,
      weapon: document.querySelector('[name="weapon"]').value,
      cartoon: document.querySelector('[name="cartoon"]').checked,
    };
    try {
      const response = await charactersAPI.updateOneRegister(characterIdToUpdate, updatedCharacterData);
      console.log('Character Updated:', response.data);
    } catch (error) {
      console.error('Error while updating character:', error);
    }
  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const newCharacterData = {
      name: document.querySelector('#new-character-form [name="name"]').value,
      occupation: document.querySelector('#new-character-form [name="occupation"]').value,
      weapon: document.querySelector('#new-character-form [name="weapon"]').value,
      cartoon: document.querySelector('#new-character-form [name="cartoon"]').checked,
    };
    try {
      const response = await charactersAPI.createOneRegister(newCharacterData);
      console.log('Character Created', response.data);
    } catch (error) {
      console.error('Error while creating character', error);
    }
  });

});
