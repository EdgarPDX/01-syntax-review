const { getName, copyAndPush, capitalizeAndFilter } = require('./getFunctions.js');


describe('getName function', () => {
  it('returns name property of an obect', ()  => {
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    const characterName = getName(character);
    
    expect(characterName).toEqual('Aang');
  });
});


describe('copyAndPush function', () =>{
  it('Returns a new array with all items in original array with a new number at the end', ()  => {
    const numbers = [1, 2, 3];
    const newNumberArray = copyAndPush(numbers, 4);
        
    expect(newNumberArray).toEqual([1, 2, 3, 4]);
    expect(numbers).toEqual([1, 2, 3]);
  });
});

describe('capitalizeAndFilter function', () =>{
  it('Returns an array with all strings capitalized and filters out strings that start with f', ()  => {
    const stringArray = ['edgar', 'anthony', 'fred', 'jessica', 'francine'];
    const newStringArray = capitalizeAndFilter(stringArray);
          
    expect(newStringArray).toEqual(['EDGAR', 'ANTHONY', 'JESSICA']);
  });
});
