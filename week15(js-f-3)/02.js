const student = {
    name: "John",
    age: 18,
    grade: "A"
  };

  function updateGrade(newGrade) {
    student.grade = newGrade;
  }
  
  updateGrade("B");
  console.log(student);
  