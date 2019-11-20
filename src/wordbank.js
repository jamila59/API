export class Wordbank {
  async getDinoName(){
    try{
      let response = await fetch ('http://dinoipsum.herokuapp.com/api/?format=json');
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
