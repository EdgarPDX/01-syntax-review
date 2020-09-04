const getName = ({ name }) => {
  return name;
};


const copyAndPush = (arr, num) => {
  const newArr = [...arr, num];
  return newArr;
};

const capitalizeAndFilter = (arr) => {
  let newStringArray = [];

  for(let i = 0; i < arr.length; i++){
    const string = arr[i];
    const firstLetter = string.charAt(0);
    if(firstLetter !== 'f'){
        
      newStringArray.push(string.toUpperCase());
    }
  }
  return newStringArray;

};

module.exports =  {
  getName,
  copyAndPush,
  capitalizeAndFilter
};
