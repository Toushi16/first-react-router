import './index.scss';
import { useOutletContext } from 'react-router-dom';

export const YoutubePlayer = () => {
    const data = useOutletContext();
    const youtubeURL = data?.video;
    const YTID = youtubeURL?.split('?v=') [1];

    return (
        <div className='youtube-player'>
            <iframe 
            width='1080'
            height='600'
             src={`https://www.youtube.com/embed/${YTID}`}
             frameBorder="0"
             allow='autoplay; encrypted-media'
             allowFullScreen
            ></iframe>
        </div>
    )
}

export default YoutubePlayer;