import React, { useEffect, useState } from 'react';
import type { Photo } from '../types';
import { Link } from 'react-router-dom';

const PhotoList: React.FC = () => {

  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=5000')
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

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
      {photos.map((photo) => (

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
            <p>{photo.title}</p>
          </Link>
        </div>

      ))}
    </div>
  );
}

export default PhotoList
