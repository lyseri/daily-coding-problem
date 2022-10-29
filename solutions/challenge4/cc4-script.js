function lowestPositiveInt(array) {

    //setup array for marking lowest missing int
    let n = array.length;
    let presentInts = new Array(n+1);
    console.log(presentInts);
      
    for (let i=0;i<n+1;i++) {
        presentInts[i]=false;
    }

    //if present mark it in new array
    console.log(presentInts);
    for (let i = 0; i < n; i++) {
        if (array[i] > 0 && array[i] <= n)
        {
            presentInts[array[i]] = true;
        }
    }

    console.log(presentInts);

    //check for lowest unmarked thats not zero
    for (let i = 1; i <= n; i++) {
        if (!presentInts[i])
        {
            return i;
        }
    }

    //if completely sorted [1,2,3], take n+1, total items plus 1
    return n + 1;
}
