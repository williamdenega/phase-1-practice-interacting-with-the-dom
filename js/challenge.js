
//getting the elements 
const input = document.getElementById('comment-input')
const counter = document.getElementById('counter')

//         Adding event listeners to the buttons
//comment button
document.querySelector('#comment-form').addEventListener('submit',handleSubmit)
//add button
document.querySelector('#plus').addEventListener('click',handlePlus)
//subtract button
document.querySelector('#minus').addEventListener('click',handleSub)
//heart button
document.querySelector('#heart').addEventListener('click',handleHeart)

// handling the submit button to add a comment
function handleSubmit(e){
    e.preventDefault()
    let p = document.createElement('p')
    p.textContent = input.value
    document.getElementById('list').appendChild(p)
    e.target.reset()
}

// handling the PLUS(+) button to add the the total counter
function handlePlus(){
    count = parseInt(counter.innerText)
    count ++
    counter.innerText = count
}
let numbers = {

}
//handling the SUBTRACT(-) buttons to subtract to the total number
function handleSub(){
    let count = parseInt(counter.innerText)
    count --
    counter.innerText = count
}

//handling the HEART button to heart the number you like
function handleHeart(){
    let num = parseInt(counter.innerText)
    //gets the amount of times the number has been liked
    let likes = numbers[num]
    let li = document.createElement('li')
    //check if the number has already been liked before
    if(num in numbers){
        likes ++
        numbers[num] = likes
        //gets the number by its ID
        li = document.getElementById(num)
        li.textContent = `${num} has been liked ${numbers[num]} times`

    }else{
        numbers[num] = 1
        let li = document.createElement('li')
        //sets the ID of the li to the number that was liked
        li.setAttribute('id', num)
        li.textContent = `${num} has been liked ${numbers[num]} time`
        document.querySelector('.likes').appendChild(li)
        console.log(li)
    }
}