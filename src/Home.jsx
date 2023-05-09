import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import { useState } from "react";

export default function Home() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const [TableData, setTableData] = useState([]);
  const [editData, setEditData] = useState(false);

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...TableData, inputs]);
    setInputs({
      name: "",
      email: "",
    });
  };

  const handleDelete = (index) => {
    const filterData = TableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };

  const handleEdit = (index) => {
    const tempDelete = TableData[index];
    setInputs({
      name: tempDelete.name,
      email: tempDelete.email,
    });
    setEditData(true);
  };

  console.log(TableData);
  return (
    <div>
      <h1>this is home page</h1>
      <Link to='contact'>contact us</Link>
      <Link to='about'>about us </Link>

      <div>
        <h1>form</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor=''>username</label>
            <input name='name' value={inputs.name} onChange={handleChange} />
            <label htmlFor=''>email</label>
            <input name='email' value={inputs.email} onChange={handleChange} />
          </div>
          <button type='submit'>{editData ? "update" : "ADD"}</button>
        </form>
      </div>

      <table className='tablecss'>
        <thead>
          <tr>name</tr>
          <tr>email</tr>
          <tr>Action</tr>
        </thead>
        <tbody>
          {TableData.map((item, i) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button
                  onClick={() => {
                    handleEdit(i);
                  }}
                >
                  edit
                </button>
                <button
                  onClick={() => {
                    handleDelete(i);
                  }}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
