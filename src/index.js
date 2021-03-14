// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    const result = [];
    for (let i = 0; i < matrix.length; i++) {

        const items = i % 2 === 0 ? matrix[i] : matrix[i].reverse();
        result.push(...items);
    }

    return result;
}
