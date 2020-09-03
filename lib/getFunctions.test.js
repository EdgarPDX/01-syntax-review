const { getName } = require('./getFunctions.js');


describe('getName function', () =>{
it('returns name property of an obect', ()  => {
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    const characterName = getName(character);
    
    expect(characterName).toEqual('Aang');
});
});
