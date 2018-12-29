import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
    background:#2f496e;

    &:hover{
        h1 {
            font-size: 20px;
        }
    }
`;

const Card = styled.h1`
    font-size: 16px;
    color: #f4eade;
    line-height: 1;

`;

const Track = ({track})=> {
    return(
            <div className="col-md-6">
                <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                    <h5>{track.artist_name}</h5>
                    <p className="card-text">
                        <strong><i className="fas fa-play">Track</i></strong>: {track.track_name}
                        <br />
                        <strong> <i className="fas fa-disc">Album</i></strong>: {track.album_name}   
                    </p>
                    <Div>
                    <Link to={`lyrics/track/${track.track_id}`} className="btn btn-block">
                    <Card><i className="fas fa-chevron-right"></i>View Lyrics</Card>
                    </Link>
                    </Div>
                    </div>
                </div>
            </div>
    )
}

export default Track;