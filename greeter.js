// Notes
// This section serves for notes
// also offsets the main code block-
// to eye level ;)
// person: string -> is called a type anotation
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = new Student("Lopa", "K", "Mudra");
document.body.innerHTML = greeter(user);
