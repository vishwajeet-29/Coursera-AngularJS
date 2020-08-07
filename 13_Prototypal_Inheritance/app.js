// creating parent object

var parent = {
    value : "parentValue",
    obj : {
        objValue : "parentObjectValue"
    },
    walk: function () {
        console.log("Parent Walking!");
    }
};

//creating child object which is based on our parent object

var child = Object.create(parent);
console.log("parent === child => ", parent === child);                                  //false
console.log("parent.value === child.value => ", parent.value === child.value);          //true
console.log("parent.obj === child.obj => ", parent.obj === child.obj);                  //true
console.log(parent);
console.log(child);     //child is itself an empty object but pointing to parent in background

console.log("Child Value = ",child.value);
console.log("Parent Value = ",parent.value);
console.log("Child Object Value = ",child.obj.objValue);
console.log("Parent Object Value = ",parent.obj.objValue);

//Now assign properties values for the child
child.value = "childValue";
console.log("parent.obj === child.obj => ", parent.value === child.value);
child.obj = { objValue : "ChildObjectValue"};

console.log("After changing child properties values")
console.log("Child Value = ",child.value);
console.log("Parent Value = ",parent.value);
console.log("Child Object Value = ",child.obj.objValue);
console.log("Parent Object Value = ",parent.obj.objValue);

//create grandchild object
console.log("creating grandChild object");
var grandChild = Object.create(child);
console.log(grandChild);

console.log("GrandChild Value = ",grandChild.value);
console.log("GrandChild Function : ");
grandChild.walk();



//Constructor function => function name starts with a Uppercase letter

function Animal(name){
    this.name = name;
    console.log("'this' is a ", this);
};

//create a object using a function constructor => needs a "new" keyword
var dog = new Animal("Dog");
console.log(dog);

console.log(new Animal("Lion"));

//In below syntax, new keyword is not used, but it must needs to call a constructor function
//As the function name is starts with a UpperCase letter and new keyword is not used then it will search for Animal function in the parent object i.e. "Window" and not the above defined function 
Animal("Lion");

