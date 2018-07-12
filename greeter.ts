// Notes
// This section serves for notes
// also offsets the main code block-
// to eye level ;)
// person: string -> is called a type anotation



class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  let she = new Student(person.firstName, "K", person.lastName)
  return "Hello " + she.firstName + " " + she.lastName;
}

let user = {
  firstName: "Lopa",
  lastName: "Mudra"
};

document.body.innerHTML = greeter(user);