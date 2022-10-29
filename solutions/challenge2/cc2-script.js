function productWithout(array) {
    
    let current = 1;
    let result = [];

    if (array.length == 1 || array.length == 0) {
        return undefined;
    }

    for (let index = 0; index < array.length; index++) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] != array[index]) {
                current *= array[i];
            }
        }
        result.push(current);
        current = 1;
    }
    
    return result;
}