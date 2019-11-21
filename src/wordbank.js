export class Wordbank {
  async getDinoName(){
      let response = await fetch ('http://dinoipsum.herokuapp.com/api/?format=json');
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    
    }

    }
