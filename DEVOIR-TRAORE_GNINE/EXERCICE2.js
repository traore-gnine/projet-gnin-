function isPremier(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("0", isPremier(0)); // false
console.log("1", isPremier(1)); // false
console.log("2", isPremier(2)); // true
console.log("3", isPremier(3)); // true
console.log("11", isPremier(11)); // true
console.log("12", isPremier(12)); //false