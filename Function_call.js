var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName:"vikash",
    lastName: "kumar"
  }
  var person2 = {
    firstName:"san",
    lastName: "Tom"
  }
  let result = person.fullName.call(person1);  // Will return "vikash kumar"

  console.log(result)

  