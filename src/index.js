module.exports = function towelSort(matrix) {
    const arr = [];

    if (!matrix || matrix.length === 0) return [];

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            matrix[i].reverse();
        }
    }
    return [].concat(...matrix);
};
