const getName = ({ name }) => {
  return name;
};


const copyAndPush = (arr, num) => {
  const newArr = [...arr, num];
  return newArr;
};

module.exports =  {
  getName,
  copyAndPush
};
