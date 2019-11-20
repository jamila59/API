import { Hangman } from './../src/backend.js';

describe('Hangman', () => {

  test('should correctly check if users letter guess matches the hidden word', () => {
    var input = new Hangman("word", 0)
    input.checkWord();
    expect(input.score).toEqual(0);
  });
})
