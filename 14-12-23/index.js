class Student {
  constructor(name, roll_no, age, address) {
    this.name = name;
    this.age = age;
    this.roll_no = roll_no;
    this.address = address ;
    this.attendance = "absent" ;
    // this.marks = marks ;
  }

 Addattendance(attendance){
this.attendance = attendance ;
  }

  Addmarks(marks){
    this.marks = marks ;
  }
     
}

const Person = new Student("Rohit", "32" , "23", "Kalyan") ;

Person.Addattendance('present') ;
Person.Addmarks(78) ;
console.log(Person); 

