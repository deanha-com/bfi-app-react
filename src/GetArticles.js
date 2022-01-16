import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';

function GetArticles(props) {

    let uri = "https://content-store.explore.bfi.digital/api/articles?page=1&size=10"

    if (props.type) {
        uri = `https://content-store.explore.bfi.digital/api/articles?type=${props.type}&size=5`
    }

    if (props.author) {
        uri = `https://content-store.explore.bfi.digital/api/articles?author=${props.author}&size=5`
    }

    const [data, setData] = useState();

    useEffect(() => {
        async function fetchMyAPI() {
            const response = await fetch(uri)
            const mydata = await response.json()
            setData(Object.values(mydata.data))
        }
        fetchMyAPI()
    }, [uri])


    function getByAuthor(e) {

        const authorId = e.target.getAttribute('data-aid');
        console.log('authorID :: ', authorId)

        ReactDOM.render(
            <GetArticles author={authorId} />,
            document.getElementById('content')
        );

    }


    if (data) {

        let data_arr = []
        data_arr.push(Object.values(data))

        console.log('>>> data (OBJ) :: ', data)
        console.log('>>> data (ARRAY) :: ', data_arr)

        return <div className="container articles">
            <h1 className="page" data-contenttype={props.currPage}>{props.currPage}</h1>

            {data_arr[0].map((val, index) => {

                console.log('data_value ::', val)
                console.log('data_index :: ', index)

                return (
                    <div className="article" data-contenttype={props.currPage} key={val.uuid}>
                        <div className="cover-image">
                            <a href={val.url}><img loading="lazy" className="" src={val.primary_image.url} alt={val.primary_image.caption} /></a>
                            <span className="article-type">{val.type.name}</span>
                        </div>

                        <div className="content">
                            <h2 className="article-title"><a href={val.url}> {val.title}</a></h2>
                            <p>{val.summary}</p>

                        </div>
                        <div className="article-stats">

                            {val.authors ? <a href="#" data-aid={val.authors[0].id} className="author" onClick={getByAuthor}>By {val.authors[0].name}</a> : null}
                            <span className="date">{val.created}</span>
                        </div>

                    </div>)
            })}

        </div>;
    } else {
        return (
            <span>loading..</span>

        )
    }
}

export default GetArticles