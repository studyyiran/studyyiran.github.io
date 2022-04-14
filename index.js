console.log('hello world')
// alert('hello world')

const $ = (...arg) => {
    return document.querySelector(...arg)
}

let name = "01"

const myModal = () => {
    
}


const init = () => {
    let myButton = $('button');
    console.log('init')
    console.log(myButton)
    if (myButton) {
        myButton.onclick = getYourName
    }
}

const getYourName = () => {
    name = prompt('请输入你的名字。');
}

const run = () => {
    const test = 
    console.log($('html'))
    const target = $('li:last-child')
    if (target) {
        console.log(target)
    }
    setInterval(() => {
        target.textContent = target.textContent + (name || '11')
    }, 1000)
}


init()
run()
