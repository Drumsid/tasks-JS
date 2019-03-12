let testObj2 = {
    className: 'one two two three'
};

const removeClass = (obj, cls) => {
    let objKey = '';
    let objKeyVol = '';
    for (let key in obj) {
        objKey = key;
        objKeyVol = obj[key];
    }

    let classes = obj[objKey].split(' ');

    for (let i = 0; i < classes.length; i++ ) {
        if (classes[i] == cls) {
            classes.splice(i, 1);
            i = 0;
        } 
    }

     obj[objKey] = classes.join(' ');
};

removeClass(testObj2, 'two');
console.log(testObj2);