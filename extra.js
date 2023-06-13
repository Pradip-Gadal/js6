//from D_P:
function main(a, b=main()){
    return a + b;
};
main() // output=RangeError: Maximum call stack size exceeded


