module.exports = function towelSort (matrix) {
  return !matrix ? [] : matrix.reduce((acc, item, i) => {
    const current = i % 2 === 0 ? item : [...item].reverse();

    return [...acc, ...current];
  }, []);
}
