const reverseString = function (s) {
    let j = s.length - 1;

    for (let i = 0; i < j; i++) {
        console.log(s);
        [s[i], s[j]] = [s[j], s[i]];
        j--;
        console.log(i);
    }

    return s;
}

console.log(reverseString(['H', 'e', 'l', 'l', 'o']));