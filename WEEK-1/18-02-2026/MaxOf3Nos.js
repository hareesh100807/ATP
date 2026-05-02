function Max(a,b,c){
    if(a>b&&a>c) return a
    else if(b>c) return b
    else return c
}
large=Max(100,240,520)
console.log(`${large} is greater`)