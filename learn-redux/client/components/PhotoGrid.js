import React from 'react';
import Photo from './Photo';

const PhotoGrid = props => (
  <div className="photo-grid">
    {props.posts.map((post, i) => (
      <Photo {...props} key={i} i={i} post={post} />
    ))}
  </div>
);

export default PhotoGrid;
