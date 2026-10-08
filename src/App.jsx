import { useState, useEffect } from "react";
import "./App.css";

function Header() {
  return (
    <header>
      <h1>Student Management System</h1>
    </header>
  );
}

function StudentProfile({
  name,
  department,
  year,
  count,
  onComplete,
  onReset
}) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = `Practice Sessions: ${count}`;

    return () => {
      document.title = previousTitle;
    };
  }, [count]);

  return (
    <div className="student-profile">
      <h2>Student Profile</h2>

      <p><strong>Name:</strong> {name}</p>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Year:</strong> {year}</p>

      <div className="practice-section">
        <h3>Practice Sessions: {count}</h3>

        <button onClick={onComplete}>
          Complete Practice
        </button>

        <button onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      © 2026 Student Management System
    </footer>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  const student = {
    name: "Anu",
    department: "CSE",
    year: "3rd Year"
  };

  const completePractice = () => {
    setCount(count + 1);
  };

  const resetPractice = () => {
    setCount(0);
  };

  return (
    <div className="app">
      <Header />

      <main>
        <h2>Student Practice Tracker</h2>

        {showProfile && (
          <StudentProfile
            name={student.name}
            department={student.department}
            year={student.year}
            count={count}
            onComplete={completePractice}
            onReset={resetPractice}
          />
        )}

        <div className="toggle-section">
          <button
            onClick={() => setShowProfile(!showProfile)}
          >
            {showProfile ? "Hide Profile" : "Show Profile"}
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;