function Student({ name, age, course, place }) {
  return (
    <div className="student-card">
      <h2>Student Details</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <p>Place: {place}</p>
    </div>
  );
}

export default Student;