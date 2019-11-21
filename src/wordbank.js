export class Wordbank {
  async getDinoName(){
      let response = await fetch ('http://dinoipsum.herokuapp.com/api/?format=json');
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } async getGiphy(){
      let response2 = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=eA5QrPG0kgbvymKiUi3pJqKZ0ZY54uIB&q=win`)
      let jsonifiedResponse2 = await response2.json();
      return jsonifiedResponse2;
    }
    }
