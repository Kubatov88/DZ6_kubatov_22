// console.log("hello");



const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

function rev()  {
    if (input.value.trim() === ''){
        return false
    } else {
        let arr = []
        arr.push(input.value)
        arr.forEach((t) => {
            const h2 = document.createElement('h2')
            document.body.append(h2)
            h2.append(t, '-', t.split('').reverse().join())
        })
    }
}

btn.onclick = () => rev()

document.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) rev()
})