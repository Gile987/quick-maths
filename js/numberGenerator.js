const generateMultipleNumbers = (n) => {
  let multipleNumbers = new Set();

  while (multipleNumbers.size !== n) {
    multipleNumbers.add(Math.floor(Math.random() * 10));
  }
  return [...multipleNumbers];
};
