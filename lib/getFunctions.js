const fetch = require('node-fetch');

const getName = ({ name }) => {
  return name;
};


const copyAndPush = (arr, num) => {
  const newArr = [...arr, num];
  return newArr;
};

const capitalizeAndFilter = (arrString) => {
  
  const filteredString = arrString.filter(string => string.charAt(0) !== 'f');
  
  return filteredString.map(string => string.toUpperCase());
  
};

const getQuote = (search) => {
  return fetch
    .get(`futuramaapi.herokuapp.com/api/quotes?search=${search}`);
    

};



module.exports =  {
  getName,
  copyAndPush,
  capitalizeAndFilter,
  getQuote
};
