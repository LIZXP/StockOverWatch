import React from 'react'
import './newsitem.scss'

export default function NewsItem({ headline, summary, url, image }) {
    return (
        <div className="news-app">
            <div className='news-item'>
                <img className='news-img' src={image} alt={image} />
                <h3><a href={url}>{headline}</a></h3>
                <p>{summary}</p>
            </div> 
        </div>
    )
}


