import { Link } from 'react-router-dom';
import './feed.css';
import { apiKey } from './data.js';
import { useState } from 'react';
import { useEffect } from 'react';
import { valueConverter } from './data.js';
import { timeConverter } from './data.js';

function Feed({ sidebar, category }) {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const videoList = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${apiKey}`;
        await fetch(videoList).then(response => response.json()).then(data => setData(data.items));
    }

    useEffect(() => { fetchData() }, [category]);

    return (
        <div className={`${sidebar ? "feed" : "largeFeed"}`}>
            {data.map((item, index) => {
                return (
                    <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card" key={index}>
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <div className="text">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{valueConverter(item.statistics.viewCount)} views • {timeConverter(item.snippet.publishedAt)}</p>
                        </div>
                    </Link>
                )
            })}

        </div>
    )
}
export default Feed;