import { useParams } from 'react-router-dom'
import PlayingVideo from './playingVideo'
import RecommendedVideo from './recommendedVideo'
import './video.css'

function Video(){

    const{videoId,categoryId} = useParams()

    return(
        <div className="video">
            <PlayingVideo videoId={videoId}/>
            <RecommendedVideo categoryId={categoryId} videoId={videoId}/>
        </div>
    )
}
export default Video