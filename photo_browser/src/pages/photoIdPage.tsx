import React, { useEffect, useState } from 'react';
import type { Photo } from '../types';
import { useParams, useNavigate } from 'react-router-dom';

const PhotoId: React.FC = () => {

    const {id} = useParams<{id: string}>();
    const navigate = useNavigate();
    const [photo, setPhoto] = useState<Photo>();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then((response) => {
            return response.json();
            })
            .then((data: Photo) => {
            setPhoto(data);
            })
            .catch((error) => {
            console.error("Error fetching photo", error)
            });
    }, [id])

    if (!photo) {
        return(<div>Loading photo</div>)
    };

    return (
        <div style={{display: 'flex', gap: '20px', padding: '20px'}}>

            <div style={{flex: 1, borderLeft: '1px solid #eee', paddingLeft: '20px'}}>
                <h2>Photo Details</h2>
                <hr />
                <p>Title: {photo.title}</p>
                <p>Album ID: {photo.albumId}</p>
                <p>Photo ID: {photo.id}</p>
                <button onClick={() => navigate(-1)}>Back</button>
            </div>

            <div style={{flex: 2}}>
                <img
                    src={`https://picsum.photos/id/${photo.id}/900/800`}
                    onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = `https://picsum.photos/seed/${photo.id}/900/800`;
                                }}
                />
            </div>

        </div>
    )
};

export default PhotoId
