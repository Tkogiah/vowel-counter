function log(a) {
    console.log(a)
}

const text = document.getElementById('text')
const checkVowels = document.getElementById('vowels-btn')
const answer = document.getElementById('answer')
let textArray = text.value.split('')
log(textArray)

function pullVowels(string) {
    let vowels = ['a','e','i','o','u']
    let vowelCount = 0
    string.toLowerCase().split('').forEach(element => {
        if(vowels.includes(element)) {
            vowelCount = vowelCount + 1
        }
    });
    return vowelCount
}

checkVowels.addEventListener('click', function() {
    answer.innerHTML = ''
    let total = pullVowels(text.value)
    log(total)
    let display = document.createElement('h2')
    display.innerText = `The total number of vowels in the text is :${total}`
    answer.appendChild(display)
    text.value = ''
})