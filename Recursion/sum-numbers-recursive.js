const sumNumbersRecursive = (numbers) => {
    if (numbers.length === 0) return 0;
    const value = numbers.pop();
    return value + sumNumbersRecursive(numbers);
};

const result = sumNumbersRecursive([5, 2, 9, 10]); // -> 26

console.log(result);
