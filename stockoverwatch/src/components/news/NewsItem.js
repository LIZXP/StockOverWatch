import React from 'react';
import './newsitem.scss'

export default function NewsItem({ headline, summary, url, image, datetime}) {

    return (
        <div className="news-app">

<div className="scroll-imgs-container">	
	
	<div className="scroll-img-item">
		<img className="scroll-img" src={image} alt={image}/>
		<div className="scroll-img-texts">
			<p className="scroll-img-title">{headline}</p>
			<p className="scroll-img-text">{summary}</p>
			<p className="scroll-img-date">{datetime}</p>			
			<button className="scroll-btn">
			<a href={url}>Read More</a>
			</button>
		</div>
	</div>
</div>
            {/* <div classNameName='news-item'>
                <img classNameName='news-img' src={image} alt={image} />
                <h4><a href={url}>{headline}</a></h4>
                <p>{summary}</p>
                <p>{datetime}</p>
            </div>  */}
        </div>
    )
}

