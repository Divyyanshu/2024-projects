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
