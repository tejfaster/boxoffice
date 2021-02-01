import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { apiGet } from '../misc/config'
import ShowGrid from '../components/show/ShowGrid'
import ActorGrid from '../components/actor/ActorGrid'

export default function Home() {
    const [input, setInput] = useState('');
    const [results, setResult] = useState(null);
    const [searchOption, setSearchOption] = useState('shows');
    const isShowsSearch = searchOption === 'shows'

    // useEffect(()=>{
    //     // compnentdidMount
    //     console.log('component did mount')
    //     // compnent unMount
    //     return()=>{
    //         console.log('component unmount')
    //     }
    // },[])

    const onInputChange = ev => {
        setInput(ev.target.value)
    }
    const onClickSearch = () => {

        apiGet(`/search/${searchOption}?q=${input}`).then(result => {
            setResult(result);
            console.log(result);
        });

        // fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
        // fetch(`https://api.nasa.gov/planetary/apod?api_key=rfFbiDUJ9b6kKtiAAoV4NIBEnMGvscl2jOQ7hIl7`)
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
    const onRadioChange = (ev) => {
        setSearchOption(ev.target.value)
    }
    console.log(searchOption)
    const renderResults = () => {
        if (results && results.length === 0) {
            return <div>No results</div>
        }
        if (results && results.length > 0) {
            return results[0].show
                ? <ShowGrid data={results} /> : <ActorGrid data={results} />
        }
        return null
    }

    return (
        <MainPageLayout>
            <input
                type="text"
                placeholder='Search for something'
                onChange={onInputChange}
                value={input}
            />
            <div>
                <label htmlFor="shows-search">
                    Shows
                    <input
                        id="shows-search"
                        type="radio"
                        value="shows"
                        checked={isShowsSearch}
                        onChange={onRadioChange}
                    />
                </label>
                <label htmlFor="actors-search">
                    Actors
                    <input
                        id="actors-search"
                        type="radio"
                        value="people"
                        checked={!isShowsSearch}
                        onChange={onRadioChange}
                    />
                </label>
            </div>
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