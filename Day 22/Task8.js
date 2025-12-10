function getGrade(mark) {
  if (mark >= 90 && mark <= 100) {
    return "A";
  } else if (mark >= 80) {
    return "B";
  } else if (mark >= 70) {
    return "C";
  } else if (mark >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log("Grade:",getGrade(95)); // A
console.log("Grade:",getGrade(82)); // B
console.log("Grade:",getGrade(73)); // C
console.log("Grade:",getGrade(65)); // D
console.log("Grade:",getGrade(40)); // F