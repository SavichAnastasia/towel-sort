module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let result = [];

  for (var i = 0; i < matrix.length; i++) {
    if (i === 0 || (i % 2 === 0)) {
      result = [...result, ...matrix[i]]
    } else {
      result = [...result, ...matrix[i].reverse()]
    }
  }

  return result;
}
