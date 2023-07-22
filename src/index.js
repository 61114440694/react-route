import React, {useContext, useRef} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';

import Contact from './Contact';
import {userContext} from './context';


import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function App() {
    return (
<userContext.Provider value ={"John Doe"}>
<BrowserRouter>
            <Routes>
                <Route path='/'
                    element={<Main/>}/>
                <Route path='/index'
                    element={<Index/>}/>
                <Route path='/menu'
                    element={<Menu/>}/>
                <Route path='/contact'
                    element={<Contact/>}/>
                <Route path='/course'
                    element={<Course/>}/>
            </Routes>
        </BrowserRouter>

</userContext.Provider>
       
    )
}

function Course() {
    const table = useRef([]);
    const tr = useRef([]);

    const DeleteRow = (i) => {
        const index = tr.current[i].rowIndex;
        table.current.deleteRow(index);
    };

    const data = [
        [
            "javaScript", 1000
        ],
        [
            "React", 1500
        ],
        [
            "Django", 2000
        ],
        [
            "Flutter", 2000
        ],
    ]
    return (
        <>
            <Menu/>
            <div className='m-2 px-5'>
                <h3>course</h3>
                <Table className='table'
                    ref={table}>
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Price</th>
                            <th>#</th>

                        </tr>
                    </thead>
                    <tbody> {
                        data.map((item, i) => {
                            return (
                                <tr ref={
                                        (el) => (tr.current[i] = el)
                                    }
                                    key={i}>
                                    <td>{
                                        item[0]
                                    }</td>
                                    <td>{
                                        item[1]
                                    }</td>
                                    <td className="text-center">
                                        <Button variant="danger"
                                            onClick={
                                                () => DeleteRow(i)
                                        }>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })
                    } </tbody>
                </Table>
            </div>

        </>
    );
}

function Main() {
    return (
        <>
            <Menu/>
        </>
    )
}

export function Menu() {
    return (
        <div className='bg-light p-3 my-3 m-2 border shadow'>
            <h1>Menu-Link :
            </h1>
            <ul>
                <li>
                    <NavLink to="/">Main</NavLink>
                </li>

                <li>
                    <NavLink to="/index">Index
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/course">course
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

function Index() { 
  let user = useContext(userContext)
  const header1 = useRef()
    return (
    
    <div>
    <Menu />
    <Button onClick={()=>{header1.current.innerHTML = "React"}}>
      Click
    </Button>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
