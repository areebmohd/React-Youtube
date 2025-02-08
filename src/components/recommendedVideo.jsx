import './recommendedVideo.css';
import { Link } from 'react-router-dom';
import { apiKey } from './data.js';
import { useState } from 'react';
import { useEffect } from 'react';
import { valueConverter } from './data.js';
import { timeConverter } from './data.js';


function RecommendedVideo({categoryId}) {

  const [data, setData] = useState([]);
  
      const fetchData = async () => {
          const videoList = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${apiKey}`;
          await fetch(videoList).then(response => response.json()).then(data => setData(data.items));
      }
  
      useEffect(() => { fetchData() }, [categoryId]);

  return (
      <div className="recommendedVideo">
          {data.map((item, index) => {
              return (
                  <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="videoCard" key={index}>
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
  );
}
export default RecommendedVideo;