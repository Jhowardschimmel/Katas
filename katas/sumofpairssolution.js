var sum_pairs = function(ints, s) {
    var map = {},
        pair, pairMaxIndex = ints.length - 1;

    for (var i = 0; i <= pairMaxIndex; i++) {
        var a = ints[i];
        var b = s - a;
        var j = map[b];
        if (j !== undefined && i <= pairMaxIndex && j <= pairMaxIndex) {
            pairMaxIndex = i > j ? i : j;
            pair = i < j ? [a, b] : [b, a];
        }
        var tmp = map[a];
        if (tmp === undefined || i < tmp) {
            map[a] = i;
        }
    }
    return pair;
};
console.log(sum_pairs([5,9,13,-3], 10))