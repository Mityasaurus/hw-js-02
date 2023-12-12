const Student = function (name, lastname, ...args) {
  this.name = name;
  this.lastname = lastname;
  this.marks = [...args];
};

Student.prototype.getAverageMark = function () {
  return (
    this.marks.reduce((acc, mark) => (acc += mark), 0) / this.marks.length
  ).toFixed(1);
};

const student1 = new Student("Dmytro", "Bovdun", 12, 12, 11, 12, 10, 12, 11);
console.log(student1.getAverageMark());

const student2 = new Student("Oleg", "Testov", 10, 8, 7, 12, 9, 8, 11);
console.log(student2.getAverageMark());
