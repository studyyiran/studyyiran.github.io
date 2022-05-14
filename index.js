console.log('hello world')

const $ = (...arg) => {
  return document.querySelector(...arg)
}

let name = '02'

const myModal = () => {}

const init = () => {
  let myButton = $('button')
  console.log('init')
  console.log(myButton)
  if (myButton) {
    myButton.onclick = getYourName
  }
}

const getYourName = () => {
  name = prompt('请输入你的名字。')
}

const run = () => {
  console.log($('html'))
  const target = $('li:last-child')
  if (target) {
    console.log(target)
  }
  let count = 0
  setInterval(() => {
    count++
    if (count < 3) {
      target.textContent = target.textContent + (name || '11')
    }
  }, 1000)
}

init()
run()
