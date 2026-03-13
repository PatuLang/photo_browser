import React from 'react';
import type { Photo } from '../types';
import { useLocation } from 'react-router-dom';

const PhotoId: React.FC = () => {

    const location = useLocation();
    const photo = location.state?.photo as Photo

    if (!photo) {
        return(<div>Error loading photo</div>)
    };

    return (
        <div style={{display: 'flex', gap: '20px', padding: '20px'}}>
            <div style={{flex: 2}}>
                <img
                    src={`https://picsum.photos/id/${photo.id}/900/800`}
                />
            </div>

            <div style={{flex: 1, borderLeft: '1px solid #eee', paddingLeft: '20px'}}>
                <h2>Photo Details</h2>
                <hr />
                <p>Title: {photo.title}</p>
                <p>Album ID: {photo.albumId}</p>
                <p>Photo ID: {photo.id}</p>
                <button onClick={() => window.history.back()}>Back to List</button>
            </div>

        </div>
    )
};

export default PhotoId
