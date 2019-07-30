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
  let dd = person.fullName.call(person2);  // Will return "John Doe"

  console.log(dd)

  