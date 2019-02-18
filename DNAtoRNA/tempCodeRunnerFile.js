const dnaToRna = (dna) => {
    let z = "";
    for ( let i =0; i < dna.length; i++) {
        if (dna[i] === false) {
            return z;
        } 
        // else if (dna[i] !== "G" || dna[i] !== "C" || dna[i] !== "T" || dna[i] !== "A") {
        //     return null;
        // }
        else if ( dna[i] === "G") {
            z +=  "C";
        } 
        else if ( dna[i] === "C") {
            z +=  "G";
        }
        else if ( dna[i] === "T") {
            z +=  "A";
        }
        else if ( dna[i] === "A") {
            z +=  "U";
        } else {
            return null;
        }

    }
    return z;
};

console.log(dnaToRna("ACNTG"));