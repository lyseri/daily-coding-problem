// This problem was asked by Facebook.
// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.
// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
// You can assume that the messages are decodable. For example, '001' is not allowed.

// Solution:
function helper(str, n) {
    if (n == 0) {
        return 1;
    }

    start = str.length - n;
    if (n[0] == '0') {
        return 0;
    }

    result = helper(str, n-1);
    if (n >= 2 && str[start] <= 26) {
        result += helper(str, n-2);
    }
    return result;
}
function numWays(str) {
    return helper(str, str.length)
}

console.log(numWays('1111'));