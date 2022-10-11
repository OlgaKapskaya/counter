import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Timer} from "./components/Timer/Timer";
import {Button} from "./components/Button";

type ShowType = 'counter' | 'timer'

function App() {
    const [show, setShow] = useState<ShowType>('counter')
    return (
        <div className={'App'}>
            <header>
                <Button name={'COUNTER'} callback={() => setShow('counter')} disabled={show === 'counter'}/>
                <Button name={'TIMER'} callback={() => setShow('timer')} disabled={show === 'timer'}/>
            </header>
            <div>
                {show === 'counter' && <Counter/>}
                {show === 'timer' && <Timer/>}
            </div>
            <footer>
                {/*<div>Made by OLGA KAPSKAYA</div>*/}
            </footer>

        </div>
    );
}

export default App;
