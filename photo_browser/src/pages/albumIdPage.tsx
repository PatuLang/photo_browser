import React, { useEffect, useState } from 'react';
import type { Album, Photo } from '../types';
import { useParams, useNavigate, Link } from 'react-router-dom';

const AlbumId: React.FC = () => {
    
    const {id} = useParams<{id: string}>();
    const navigate = useNavigate();
    const [album, setAlbum] = useState<Album>()
    const [albumPhotos, setAlbumPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
            .then((response) => {
            return response.json();
            })
            .then((data: Album) => {
            setAlbum(data);
            })
            .catch((error) => {
            console.error("Error fetching photos in album", error)
            });

        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
            .then((response) => {
            return response.json();
            })
            .then((data: Photo[]) => {
            setAlbumPhotos(data);
            })
            .catch((error) => {
            console.error("Error fetching photos in album", error)
            });
    }, [id]);
    
    if (!album) {
        return(<div>Loading album</div>)
    };

    return (
        <div style={{display: 'flex', gap: '40px', padding: '20px'}}>

            <div style={{flex: 1, borderLeft: '1px solid #eee', paddingLeft: '20px'}}>
                <h2>Album Details</h2>
                <hr />
                <p>User ID: {album.userId}</p>
                <p>ID: {album.id}</p>
                <p>Title: {album.title}</p>
                <button onClick={() => navigate(-1)}>Back</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
                {albumPhotos.map((photo) => (
                    <div key={photo.id} style={{ border: '4px solid #ccc', padding: '10px' }}>
                        <Link 
                            to={`/photos/${photo.id}`}
                            state={{photo}}>
                                <img src={`https://picsum.photos/id/${photo.id}/150/150`}
                                    loading="lazy" 
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = `https://picsum.photos/seed/${photo.id}/150/150`;
                                    }}
                                />
                        </Link>
                    </div>
                ))}
            </div>
            
        </div>
    )
};

export default AlbumId
