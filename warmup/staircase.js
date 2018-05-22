function staircase(n) {
    for(let i=0; i<n; i++) {
        let show = "";
        for(let j=0; j<n; j++) {
            if( (n-i-j) > 1 )
                show += ' ';
            else
                show += '#';
        }
        console.log(show);
    }
}