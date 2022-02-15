// creates a constant for us to target labels with 
const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
        // splits label into an array of seperate letters
        .split('')
        // can use an array
        .map((letter, idx) => `<span style="transition-delay:${idx * 70}ms">${letter}</span>`)
        // turns the array back into a string
        .join('')
})