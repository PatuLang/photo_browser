import React, { useEffect, useState } from 'react';
import type { Album } from '../types';
import { Link } from 'react-router-dom';

const AlbumList: React.FC = () => {

    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then((response) => {
            return response.json();
            })
            .then((data: Album[]) => {
            setAlbums(data);
            })
            .catch((error) => {
            console.error("Error fetching albums", error)
            });
    }, []);

    if (!albums) {
        return(<div>Loading albums</div>)
    };

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '100px' }}>
            {albums.map((album) => (
                <div key={album.id} style={{ border: '4px solid #ccc', padding: '10px' }}>
                    <Link 
                        to={`/albums/${album.id}`}>
                        <p>{album.title}</p>
                  </Link>
                </div>
            ))}
        </div>
    );
}

export default AlbumList
