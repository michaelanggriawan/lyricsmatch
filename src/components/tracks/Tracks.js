import React, { Component } from 'react';
import {Consumer} from '../../Context';
import Picture from '../layout/Picture';
import styled from 'styled-components';
import Track from './Track';

const Center = styled.h1`
  text-align: center;
  font-size: 20px;
  color: #2f496e;
  padding: 20px;
`;

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        { value=> {
          const { track_list, heading } = value;
          const trackList = track_list.map(item=> {
            return(
              <Track track={item.track} key={item.track.track_id}/>
            )
          })
          if( track_list === undefined || track_list.length === 0){
            return <Picture />
          }else {
            return (
              <React.Fragment>
                <Center className="mb-4">{heading}</Center>
                <div className="row">
                  {trackList}
               </div>
              </React.Fragment>
            )  
          }
        }}
      </Consumer>
    )
  }
}

export default Tracks;
