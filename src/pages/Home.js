import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'

export default function Home() {
    const [input, setInput] = useState('');

    const onInputChange = ev => {
        setInput(ev.target.value)
    }
    const onClickSearch = () => {
        fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
            .then(r => r.json())
            .then(result => {
                console.log(result);
            });
            
    };
    const onKeyDown = (ev) =>{
        if(ev.keyCode === 13){
            onClickSearch()
        }
        console.log(ev.keyCode)
    }
    
    return (
        <MainPageLayout>
            <input type="text" onChange={onInputChange} value={input} />
            <button type='button' onClick={onClickSearch} onKeyDown={onKeyDown}>Search</button>
        </MainPageLayout>
    )
}
