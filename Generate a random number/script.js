const randomGenerator = (() => {
    const randomNumber = Math.floor(Math.random() * 100) +1;
    return () => randomNumber;
})();

const randomNum = randomGenerator();

console.log(`Random number between 1 to 100: ${randomNum}`);