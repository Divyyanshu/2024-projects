# Projects Releted TO DOM

## Projects link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-4mjvuc?file=index.html)

# Source Code

## Project 1 .

```javascript

const button = document.querySelectorAll('.button');
const  body = document.querySelector('body');

button.forEach(button => {
    button.addEventListener('click',function(e){
      if (e.target.id === "grey"){
        body.style.backgroundColor = e.target.id
      }
      if (e.target.id === "green"){
        body.style.backgroundColor = e.target.id
      }
      if (e.target.id === "blue"){
        body.style.backgroundColor = e.target.id
      }
      if (e.target.id === "yellow"){
        body.style.backgroundColor = e.target.id
      }
    });
});


```
## Project 2 .
```javascript
const form = document.querySelector('form');

form.addEventListener('submit' , function(e){
   e.preventDefault();
    // import html height and weight and result

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')

    if(height === "" || height > 0 || isNaN(height)){
        results.innerHTML = `pls give correct height ${height}`
    }else
    if(weight === "" || weight > 0 || isNaN(weight)){
        results.innerHTML = `pls give correct weight ${weight}`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerText = `Result : ${bmi}`
    }
})

```
