// bad
const bad = function () {
    console.log('bad');
};

// good
function good() {
    const aaa = 'aaaa';
    console.log(`good${aaa}`);
}

console.log(bad());
console.log(good());
