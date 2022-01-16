import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react'
import GetArticles from './GetArticles'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

export default function Filter(props) {

    const uri = "https://content-store.explore.bfi.digital/api/types"
    const [data, setData] = useState();

    useEffect(() => {
        async function fetchMyAPI() {
            const response = await fetch(uri)
            const mydata = await response.json()
            setData(Object.values(mydata.data))
        }
        fetchMyAPI()
    }, [uri])


    function handleClick(e) {
        let articleType = new URL(e.target.href).pathname.substring(1)
        console.log(e.target.href, articleType)
        props.setCurrPage(articleType);

        ReactDOM.render(
            <GetArticles currPage={articleType} type={articleType} />,
            document.getElementById('content')
        );
    }

    if (data) {

        let data_arr = []
        data_arr.push(Object.values(data))

        console.log('>>> data (OBJ) :: ', data)
        console.log('>>> data (ARRAY) :: ', data_arr)

        return <ul className="filter-links">
            <Router>
                {data_arr[0].map((val, index) => {

                    console.log('data_value ::', val)
                    console.log('data_index :: ', index)

                    return (
                        <li className="link" key={val.id}>
                            {/* <a href={val.id} >{val.name}</a> */}
                            <Link className="btn" onClick={handleClick} to={val.id} >{val.name}</Link>
                        </li>)
                })}

            </Router>
        </ul>;
    } else {
        return (
            <span>loading..</span>
        )
    }


}
