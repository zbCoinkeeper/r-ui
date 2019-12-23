import * as React from 'react';
import  { alert, confirm, modal } from './dialog';


export default function () {
    const openModal = () => {
        const close= modal(<h1>你好
      <button onClick={() => close()}>close</button>
        </h1>);
    };
    return (
        <div>
            <div>
                <h1>example 4</h1>
                <button onClick={openModal}>modal</button>
            </div>

            <div>
                <h1>example 3</h1>
                <button onClick={() => alert('1')}>alert</button>
                <button onClick={() => confirm('1', () => {
                    console.log('你点击了yes');
                }, () => {
                    console.log('你点击了no');
                })}>confirm
         </button>
            </div>
        </div>
    );
} 