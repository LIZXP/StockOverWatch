import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from "./NewsItem"

export default function NewsList () {
    const [data, setNews] = useState([])

    useEffect(() => {
        const getNews = async () => {
            const response = await axios.get(`https://finnhub.io/api/v1/news?category=general&token=cdmjq6aad3ibvooj3ue0cdmjq6aad3ibvooj3ueg`)
            console.log(response.data)
            setNews(response.data)
        }

        getNews()
    }, [])
    return (
        <div>
            {data.slice(0,10).map(data => {
                
                    return(
                        <NewsItem
                        key= {data.id}
                        headline={data.headline}
                        summary={data.summary}
                        url={data.url}
                        image={data.image}
                        datetime= {(new Date((data.datetime)*1000)).toString()}
                        />
                        )
                    
            })}
        </div>
    )

}
