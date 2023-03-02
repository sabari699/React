import './App.css';
import Button from '@mui/material/Button';
import Address from './components/address';
import React, { useEffect, useState, useRef, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import instance from './api/instance'
import { LOGIN } from './store/types';
// import logo from './logo.svg'
export default function Contact() {
  // session value view
  var logindetails = useSelector((state)=>state.auth.login)
  console.log('Session Data', logindetails)
  var forLoopData = ["sabari", "rai", "h"];
  const [forLoop, sethandleClick] = useState('ram');
  var data = 10;
  const textarearef = useRef();
  // session value dispatch
  const dispatch = useDispatch();
  function call1() {
    dispatch({type: LOGIN, payload: {name:"sabarikanth.s", password:"SABARI"}});
  }
  function clickbuttonFunction() {
    console.log('log clickbuttonFunction')
  }
  useEffect(() => {
    call1();
  },[])
  const focusInput = () => {
    console.log(textarearef)
    textarearef.current.disabled = true;
  };
  // from submit
  function handleSubmit(e) {
    e.preventDefault();
    console.log(process.env)
    console.log(e.target.answer.value)
  }
// formik from submit
// axios form submit
  async function formikFormSubmit(value) {
    const response= await instance({
      url: "/data",
      method: "POST",
      data:{
        name:"sabarikanth"
      }
    })
    console.log(response)
    console.log('ss', value)
  }
  if (1 == 2) {
    return (
      <>
        <div>
          <h3 style={{ color: 'red' }}>hi</h3>
        </div>
      </>
    );
  } else {
    return (
      <>
  
     <h1>Page</h1>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
          formikFormSubmit(values)
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>logindetails
        <div style={{ color: 'green' }}>show {data}</div>
        {/* normal form post */}
        <form onSubmit={handleSubmit}>
          <label>question 1</label><br></br>
          <textarea ref={textarearef} type="text" name='answer'></textarea>
          <button onClick={focusInput}>focus input</button>
          <input type="submit"></input>
        </form>
        <Address name={forLoop} functiocall={clickbuttonFunction} size="10" ></Address>
        <Button variant="contained" color="success" onClick={() => sethandleClick('sabari')}>submit</Button>
        <ul>
        {
          forLoopData.map((item, key) =>   <li key={key}>{item}</li>
          )
        }
        </ul>
        <h2>Redux data</h2>
        <div>Name: {logindetails.name}</div>
        <div>Password: {logindetails.password}</div>
      </>
    )
  }
}

