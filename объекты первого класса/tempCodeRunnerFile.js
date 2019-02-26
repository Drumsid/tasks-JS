const apply = (count, foo, num) => {
    let result = 0;
    if ( count == 0) {
        return num;
    }
    for (; count > 0; count--) {
        result = foo(num);
        num = result;
    }
    return result;
}; 