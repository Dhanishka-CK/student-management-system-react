import "./App.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">SMS</div>
        <div>
          <h1>Student Management System</h1>
          <p>Student Profile Management Portal</p>
        </div>
      </div>
    </header>
  );
}

function StudentProfile(props) {
  return (
    <div className="student-profile">
      <div className="profile-top">
        <div className="avatar">
          {props.name.charAt(0)}
        </div>
        <div>
          <h3>{props.name}</h3>
          <span className="status">Active Student</span>
        </div>
      </div>

      <div className="profile-details">
        <div className="detail">
          <span className="label">Department</span>
          <span className="value">{props.department}</span>
        </div>

        <div className="detail">
          <span className="label">Academic Year</span>
          <span className="value">{props.year}</span>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 Student Management System</p>
      <p>Built with React Components, JSX and Props</p>
    </footer>
  );
}

function App() {
  const student1 = {
    name: "Anu",
    department: "CSE",
    year: "3rd Year"
  };

  const student2 = {
    name: "Bala",
    department: "Computer Science",
    year: "3rd Year"
  };

  return (
    <div className="app">
      <Header />

      <main className="container">
        <section className="welcome-section">
          <div>
            <span className="eyebrow">STUDENT DIRECTORY</span>
            <h2>Student Profiles</h2>
            <p>
              View academic information of registered students.
            </p>
          </div>

          <div className="student-count">
            <strong>02</strong>
            <span>Students</span>
          </div>
        </section>

        <section className="profiles-section">
          <div className="section-heading">
            <h2>Student 1</h2>
            <span>Profile</span>
          </div>

          <StudentProfile
            name={student1.name}
            department={student1.department}
            year={student1.year}
          />

          <div className="section-heading">
            <h2>Student 2</h2>
            <span>Profile</span>
          </div>

          <StudentProfile
            name={student2.name}
            department={student2.department}
            year={student2.year}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;