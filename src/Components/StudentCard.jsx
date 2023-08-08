import React from 'react';

const StudentCard = (props) => {
  const { name, subjects } = props.student;

  return (
    <div className="student-card">
      <h2>{name}'s Report Card</h2>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject.name}</td>
              <td>{subject.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Display total and average marks here */}
      <p>Total Marks: {props.totalMarks}</p>
      <p>Average Marks: {props.averageMarks}</p>
    </div>
  );
};

export default StudentCard;
