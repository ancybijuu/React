import Student from "./Student";
import "./App.css";

function App() {
  return (
    <div className="student-container">
      <h1>🎓 Student Profile</h1>
      <p className="subtitle">Meet Our Students</p>

      <Student
        name="Anu"
        age={21}
        course="BCA"
        place="Trivandrum"
      />

      <Student
        name="Arun"
        age={22}
        course="B.Tech"
        place="Kochi"
      />

      <Student
        name="Meera"
        age={20}
        course="B.Sc"
        place="Kollam"
      />
    </div>
  );
}

export default App;