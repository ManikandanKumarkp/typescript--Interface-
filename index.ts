// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

interface person{
  name:string;
  age:number;
  greet:() => void;
}
const Mani: person = {
name:"Mani",
age:25,
greet(){
  console.log("hello,my name is ", Mani)
}
};