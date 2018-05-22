function plusMinus(arr) {
    let sizes = [0, 0, 0];
    let size = arr.length;
    
    arr.forEach((num) => {
        if(num > 0)
            sizes[0] += 1;
        else if(num < 0)
            sizes[1] += 1;
        else
            sizes[2] += 1;
    });
    
    sizes.forEach((num) => {
       console.log(num/size); 
    });
}