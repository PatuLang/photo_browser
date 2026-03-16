import React, { useEffect, useState } from 'react';
import type { Photo } from '../types';
import { Link } from 'react-router-dom';

const PhotoList: React.FC = () => {

    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
              return response.json();
            })
            .then((data: Photo[]) => {
            setPhotos(data);
            })
            .catch((error) => {
              console.error("Error fetching photos", error)
            });
    }, []);

    if (!photos) {
        return(<div>Loading photos</div>)
    };

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
            {photos.map((photo) => (
                <div key={photo.id} style={{ border: '4px solid #ccc', padding: '10px' }}>
                    <Link 
                        to={`/photos/${photo.id}`}>
                            <img src={`https://picsum.photos/id/${photo.id}/150/150`}
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = `https://picsum.photos/seed/${photo.id}/150/150`;
                                }}
                            />
                    </Link>
                </div>
            ))}
      </div>
    );
}

export default PhotoList
