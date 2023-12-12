const student = {
  name: "Dmytro",
  group: "PV222",
  age: 18,
  subjects: ["C#", "SQL", "JavaScript"],
  addSubject(subject) {
    if (this.subjects.includes(subject)) {
      console.log(`You are already studying subject ${subject}`);
    } else {
      this.subjects.push(subject);
      console.log(`Subject ${subject} was added`);
    }
  },
  removeSubject(subject) {
    if (this.subjects.includes(subject) == false) {
      console.log(`You are not studying subject ${subject}`);
    } else {
      this.subjects.splice(this.subjects.indexOf(subject), 1);
      console.log(`Subject ${subject} was removed`);
    }
  },
};

student.addSubject("HTML");
student.addSubject("JavaScript");
student.addSubject("HTML");
console.log(student.subjects);
student.removeSubject("SQL");
console.log(student.subjects);
student.removeSubject("SQL");
