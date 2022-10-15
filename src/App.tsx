import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Timer} from "./components/Timer/Timer";
import {BrowserRouter, Navigate, NavLink, Route, Routes} from "react-router-dom";
import {ErrorPage} from "./components/ErrorPage/Error";
import {Header} from "./components/Header/Header";


function App() {
    return (
        <BrowserRouter>
            <div className={'App'}>
                <Header/>
                <div>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/counter'}/>}/>
                        <Route path={'/counter'} element={<Counter/>}/>
                        <Route path={'/timer'} element={<Timer/>}/>
                        <Route path={'/*'} element={<ErrorPage/>}/>
                    </Routes>
                </div>
                <footer>
                    {/*<div>Made by OLGA KAPSKAYA</div>*/}
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
