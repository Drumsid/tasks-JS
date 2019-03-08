const iter = (char, acc) => {
        return char > lastIndex ? acc : iter(char + 1, acc + str[lastIndex - char]);
    };