class Student {
  constructor(name, rollNo, marks = []) {
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
  }
  addMark(subject, mark) {
    this.marks.push({ subject, mark });
  }
  getAverage() {
    return this.marks.reduce((sum, m) => sum + m.mark, 0) / this.marks.length;
  }
  getGrade() {
    const avg = this.getAverage();
    return avg >= 90 ? 'A' : avg >= 80 ? 'B' : avg >= 70 ? 'C' : 'F';
  }
}
const s1 = new Student("Kishorre RP ", 101);
s1.addMark("Math", 95);
s1.addMark("Science", 78);

console.log("Student grade is:",s1.getGrade()); 
