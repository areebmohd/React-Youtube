import './playingVideo.css'
import dp from './dp.jpg'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiKey, valueConverter, timeConverter } from './data.js'
import { useEffect } from 'react'

function PlayingVideo() {

    const { videoId } = useParams()

    const [apiData, setApiData] = useState(null)
    const [channelData, setChannelData] = useState(null)
    const [commentData, setCommentData] = useState([])

    const videoData = async () => {
        const videoDetails = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`;
        await fetch(videoDetails).then(response => response.json()).then(data => setApiData(data.items[0]));
    }

    const otherData = async () => {
        const channelDetails = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${apiKey}`;
        await fetch(channelDetails).then(response => response.json()).then(data => setChannelData(data.items[0]));

        const commentDetails = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${apiKey}`;
        await fetch(commentDetails).then(response => response.json()).then(data => setCommentData(data.items));
    }

    useEffect(() => { videoData() }, [videoId]);
    useEffect(() => { otherData() }, [apiData]);

    return (
        <div className="playingVideo">
            <iframe width="1047" height="589" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
            <h3>{apiData ? apiData.snippet.title : "Title here"}</h3>
            <div className="details">
                <div className="leftDetails">
                    <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="" />
                    <div className="channelName">
                        <h4>{apiData ? apiData.snippet.channelTitle : "Name"}</h4>
                        <p>{channelData ? valueConverter(channelData.statistics.subscriberCount) : "00"} subscribers</p>
                    </div>
                    <button>Subscribe</button>
                </div>
                <div className="rightDetails">
                    <div className="like-dislike">
                        <div className="like">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='25px'><path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16l-97.5 0c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8l97.5 0c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32L0 448c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32l-64 0z" /></svg>
                            <p>{apiData ? valueConverter(apiData.statistics.likeCount) : "00"}</p>
                        </div>
                        <div className="dislike">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='25px'><path d="M323.8 477.2c-38.2 10.9-78.1-11.2-89-49.4l-5.7-20c-3.7-13-10.4-25-19.5-35l-51.3-56.4c-8.9-9.8-8.2-25 1.6-33.9s25-8.2 33.9 1.6l51.3 56.4c14.1 15.5 24.4 34 30.1 54.1l5.7 20c3.6 12.7 16.9 20.1 29.7 16.5s20.1-16.9 16.5-29.7l-5.7-20c-5.7-19.9-14.7-38.7-26.6-55.5c-5.2-7.3-5.8-16.9-1.7-24.9s12.3-13 21.3-13L448 288c8.8 0 16-7.2 16-16c0-6.8-4.3-12.7-10.4-15c-7.4-2.8-13-9-14.9-16.7s.1-15.8 5.3-21.7c2.5-2.8 4-6.5 4-10.6c0-7.8-5.6-14.3-13-15.7c-8.2-1.6-15.1-7.3-18-15.2s-1.6-16.7 3.6-23.3c2.1-2.7 3.4-6.1 3.4-9.9c0-6.7-4.2-12.6-10.2-14.9c-11.5-4.5-17.7-16.9-14.4-28.8c.4-1.3 .6-2.8 .6-4.3c0-8.8-7.2-16-16-16l-97.5 0c-12.6 0-25 3.7-35.5 10.7l-61.7 41.1c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l61.7-41.1c18.4-12.3 40-18.8 62.1-18.8L384 32c34.7 0 62.9 27.6 64 62c14.6 11.7 24 29.7 24 50c0 4.5-.5 8.8-1.3 13c15.4 11.7 25.3 30.2 25.3 51c0 6.5-1 12.8-2.8 18.7C504.8 238.3 512 254.3 512 272c0 35.3-28.6 64-64 64l-92.3 0c4.7 10.4 8.7 21.2 11.8 32.2l5.7 20c10.9 38.2-11.2 78.1-49.4 89zM32 384c-17.7 0-32-14.3-32-32L0 128c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0z" /></svg>
                        </div>
                    </div>
                    <div className="share">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='25px'><path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" /></svg>
                        <p>Share</p>
                    </div>
                    <div className="more">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height='25px'><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" /></svg>
                    </div>
                </div>
            </div>
            <div className="description">
                <h4>{apiData ? valueConverter(apiData.statistics.viewCount) : "20k"} views • {apiData ? timeConverter(apiData.snippet.publishedAt) : "1 day ago"}</h4>
                <p>{apiData ? apiData.snippet.description.slice(0, 300) : "No description"}</p>
            </div>
            <div className="comments">
                <h3>{apiData ? valueConverter(apiData.statistics.commentCount) : "00"} Comments</h3>
                <div className="reply">
                    <img src={dp} alt="" />
                    <input type="text" placeholder="Add a public comment..." />
                    <button>Comment</button>
                </div>
                {commentData.map((item, index) => {
                    return (
                        <div className="comment" key={index}>
                            {commentData?<img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt=""/>:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height='25px'><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg>}
                            <div className="commentText">
                                <div><p className='username'>{item.snippet.topLevelComment.snippet.authorDisplayName}</p><p className='time'></p>{timeConverter(item.snippet.topLevelComment.snippet.publishedAt)}</div>
                                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                <div><p>Like</p><p>Reply</p></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default PlayingVideo