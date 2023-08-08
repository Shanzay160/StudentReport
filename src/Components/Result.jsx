import React from 'react';
import StudentCard from './StudentCard';

const studentsData = [
  {
    name: 'Saira',
    subjects: [
      { name: 'Math', marks: 85 },
      { name: 'Science', marks: 78 },
      { name: 'History', marks: 92 },
    ],
  },
  {
    name: 'Saim',
    subjects: [
      { name: 'Math', marks: 92 },
      { name: 'Science', marks: 88 },
      { name: 'History', marks: 76 },
    ],
  },
  {
    name: 'Alina',
    subjects: [
      { name: 'Math', marks: 84 },
      { name: 'Science', marks: 80 },
      { name: 'History', marks: 82 },
    ],
  },
  {
    name: 'Ali',
    subjects: [
      { name: 'Math', marks: 82 },
      { name: 'Science', marks: 76 },
      { name: 'History', marks: 79 },
    ],
  },
];

function Result() {
  const studentCards = studentsData.map((student, index) => (
    <StudentCard
      key={index}
      student={student}
      totalMarks={calculateTotalMarks(student.subjects)}
      averageMarks={calculateAverageMarks(student.subjects)}
    />
  ));
 // The student prop is being passed from the Result component to the StudentCard component.
 //This prop holds an object with the student's data, including name, subjects, totalMarks, and averageMarks


  return (
    <div className="result">
      <h1 className='text-lg font-bold font-serif'>Student Report Cards</h1>
      <div className="student-container">
        {studentCards}
      </div>
    </div>
  );
}

// Helper function to calculate total marks for a student
function calculateTotalMarks(subjects) {
  return subjects.reduce((total, subject) => total + subject.marks, 0);
}

// Helper function to calculate average marks for a student
function calculateAverageMarks(subjects) {
  const totalMarks = calculateTotalMarks(subjects);
  const averageMarks = totalMarks / subjects.length;
  return averageMarks.toFixed(2); // Round to 2 decimal places
}

export default Result;