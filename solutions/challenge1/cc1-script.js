function checkAdd(list, k) {
    start = 0;

    while (start < list.length) {

        for (let i = start+1; i <= list.length-1; i++) {
            if (list[start] + list[i] == k) {

                console.log(list[start] + " and " + list[i] + " add up to k.");
                return true;
            } else {
                
                continue;
            }
        }

        start++;
    }
    console.log("No two numbers in the array add up to k.");
    return false;

}
