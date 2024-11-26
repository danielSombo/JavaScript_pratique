/**Fonctions de manipulation de chaînes : */
    /**Inverser une chaîne */
    function reverseString(str) {
        return str.split("").reverse().join("")
    }

    /**Compter les caractères */
    function countCharacters(str){
        return str.length;
    }

    /**Mettre les mots en majuscule */
    function capitalizeWords(sentence){
        return sentence.spli("").map(word.charAt(0).toUpperCase() + word.slice(1).joint(''))
    }

/**Fonctions de tableau : */
    /**Rechercher le maximum et le minimum*/
    function trouverMax(){
        return Math.max(...arr);
    }
    function trouverMin(){
        return Math.min(...arr);
    }

    /**Somme d'un tableau */
    function somTableau(arr){
        return arr.reduce((som, nbr) => som + nbr, 0);
    }

    /**Filtrer le tableau*/
    function filterArray(arr, condition){
        return arr.filter(condition);
    }

/**Fonctions mathématiques : */
    /**Factorielle  */
    function factorielle(n){
        if(n === 0 || n === 1){
            return 1;
        }
        return n * (n-1)
    }

    /**Vérification des nombres premiers */
    function nombrePremier(num){
        if(num <= 1) return false;
        for(let i = 2; i <= Mathsqrt(num); i++){
            if(num % i === 0) return false;
        }
        return true;
    }

    /**Suite de Fibonacci */
    function fibonacci(n){
        if(n <= 0) return [];
        if(n === 1) return [0];
        if(n === 2) return [0, 1];
        const fib = [0, 1];
        for(let i = 2; i < n; i++){
            fib.push(fib[i - 1] + fib[i - 2]);
        } 
        return fib
    }