const name = ["Anas", "Shaikh", "Salman"] ;
const age = 23 ; 

//Template Literals
console.log(`My name is ${name} and my age is ${age}`) ;

//destructuring 
const [name1,name2, name3] = name ;
console.log(name1) ;


//Rest Operator & arrow function 
const Example = (first,second, ...rest) => {
  console.log(first) ;
  console.log(second) ;
  console.log(rest) ; 
  
} ; 
Example("Anas", "Shaikh", "Salman", "Shahrukh") ;  

//Spread Operator 
const newName = [...name] ;
console.log(newName) ;

