import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'
import {apiGet} from '../misc/config'

export default function Home() {
    const [input, setInput] = useState('');
    const [results, setResult] = useState(null);
    const onInputChange = ev => {
        setInput(ev.target.value)
    }
    const onClickSearch = () => {

        apiGet(`/search/shows?q=${input}`).then(result => {
            setResult(result);
            console.log(result);
        });

        // fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
        //     .then(r => r.json())
        //     .then(result => {
        //         setResult(result);
        //         console.log(result);
        //     });

    };
    const onKeyDown = (ev) => {
        if (ev.keyCode === 13) {
            onClickSearch()
        }
        // console.log(ev.keyCode)
    }
    const renderResults = () => {
        if (results && results.length === 0) {
            return <div>No results</div>
        }
        if (results && results.length > 0) {
            return <div>{results.map((item) =>
                <div key={item.show.id}>
                    {item.show.name}
                </div>
            )}
            </div>
        }
        return null
    }

    return (
        <MainPageLayout>
            <input
                type="text"
                onChange={onInputChange}
                value={input}
            />
            <button
                type='button'
                onClick={onClickSearch}
                onKeyDown={onKeyDown}>
                Search
                </button>
            {renderResults()}
        </MainPageLayout>
    )
}


// fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
// .then(r => r.json())
// .then(result => {
//     setResult(result);
//     console.log(result);
// });