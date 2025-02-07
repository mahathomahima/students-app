import React, { useState, useEffect } from "react";
import { database } from "../../firebase";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import './index.css'

const StudentsPage = () => {
    const [students, setStudents] = useState([]);
    const [newStudents, setNewStudent] = useState({
        name: '',
        class: "",
        section: "",
        rollNo: "",
    });

    useEffect( () => {
        const fetchStudents = async() => {
            const data = await getDocs(collection(database, "students"));
            setStudents(data.docs.map((doc) => (
                {...doc.data(), id: doc.id}
            )))
        };
        fetchStudents();
    }, []);

    const handleAddStudent = async() => {
        await addDoc(collection(database, "students"), newStudents)
        setNewStudent({
            name: '',
            class: '',
            section: '',
            rollNo: '',
        });
    }

    return (
        <div className="students-page">
          <h2>Students List</h2>
          <button className="add-student" onClick={handleAddStudent}>Add Student</button>
          
          <table className="table">
            <thead className="table-header">
              <tr className="table-header-cell">
                <th>ID</th>
                <th>Name</th>
                <th>Class</th>
                <th>Section</th>
                <th>Roll Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="table-header">
              {students.map((student) => (
                <tr className="table-header-cell" key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.class}</td>
                  <td>{student.section}</td>
                  <td>{student.rollNumber}</td>
                  <td>
                    <button className="edit">
                      <img className="edit" src="https://img.icons8.com/?size=100&id=49&format=png&color=000000" alt="edit" />
                    </button>
                    <button className="delete" onClick={async () => {
                      deleteDoc(doc(database, "students", student.id));
                      setStudents(students.filter(s => s.id !== student.id));
                    }}>
                    <img className="delete" src="https://img.icons8.com/?size=100&id=67884&format=png&color=000000" alt="delete" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}
export default StudentsPage