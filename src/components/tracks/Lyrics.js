import React, { Component } from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';
import Picture from '../layout/Picture';
import styled from 'styled-components';
import Moment from 'react-moment';

const Div = styled.div`
    background:#2f496e;
    border: none;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 10px;
    &:hover{
        h1{
            color: black;
        }
    }
`;

const Span = styled.h1`
    font-size: 16px;
    color: #f4eade;
    line-height: 1.8;
`;


class Lyrics extends Component {
   state = {
        track: {},
        lyrics: {}
   }
   componentDidMount(){
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
        this.props.match.params.id
      }&apikey=f17c617b738bb52ec1e803a187404dd9`).then(res=>{
        this.setState({lyrics: res.data.message.body.lyrics});

        return axios.get(
            `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${
                this.props.match.params.id
              }&apikey=f17c617b738bb52ec1e803a187404dd9`
            );
    }).then(res=> {
        this.setState({
            track: res.data.message.body.track
        })
    })
  
  }
  render() {
    const { track, lyrics } = this.state;
        if( track === undefined || lyrics === undefined||
            Object.keys(track).length === 0 ||
            Object.keys(lyrics).length === 0
        ){
            return <Picture />
        }else {
            return (
                <React.Fragment>
                    <Link to="/" className="btn btn-sm">
                        <Div>
                        <Span>
                        Go Back
                        </Span>
                        </Div>
                    </Link>
                    <div className="card">
                        <h5 className="card-header">
                            { track.track_name } by <span className="text-secondary">{track.artist_name}</span>
                        </h5>
                        <div className="card-body">
                        <p className="card-text">{lyrics.lyrics_body}</p>
                    </div>
                    </div>

                    <ul className="list-group mt-3">
                        <li className="list-group-item">
                            <strong>Album ID</strong>: {track.album_id}
                        </li>
                        <li className="list-group-item">
                            <strong>Song Genre</strong>: {
                                track.primary_genres.music_genre_list.map(item=>{
                                    return item.music_genre.music_genre_name;
                                })
                            }
                        </li> 
                        <li className="list-group-item">
                            <strong>Explicit words</strong>: {track.explicit === 0? 'No' : 'Yes'}
                        </li>
                        <li className="list-group-item">
                            <strong>Release Date</strong>: <Moment format="MM/DD/YYYY">{track.updated_time}</Moment>
                        </li>
                    </ul>
                </React.Fragment>
            )
        }
    }
}

export default Lyrics;




