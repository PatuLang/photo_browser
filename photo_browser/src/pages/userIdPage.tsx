import React, { useEffect, useState } from 'react';
import type { User, Album } from '../types';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const UserId: React.FC = () => {
    
    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state?.user as User;
    const [usersAlbum, setUsersAlbum] = useState<Album[]>([]);

    useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`)
                .then((response) => {
                return response.json();
                })
                .then((data: Album[]) => {
                setUsersAlbum(data);
                })
                .catch((error) => {
                console.error("Error fetching users album", error)
                });
     }, []);
    
    if (!user) {
        return(<div>Error loading user</div>)
    };

    return (
        <div style={{display: 'flex', gap: '20px', padding: '20px'}}>

            <div style={{flex: 1, borderLeft: '1px solid #eee', paddingLeft: '20px'}}>
                <h2>User Details</h2>
                <hr />
                <p>ID: {user.id}</p>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <div>Address:
                    <ul>Street: {user.address.street}</ul>
                    <ul>Suite: {user.address.suite}</ul>
                    <ul>City: {user.address.city}</ul>
                    <ul>Zipcode: {user.address.zipcode}</ul>
                    <ul>Geo: Lat {user.address.geo.lat} Lng {user.address.geo.lng}</ul>
                </div>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <div>Company:
                    <ul>Name: {user.company.name}</ul>
                    <ul>Catch phrase: {user.company.cathPhrase}</ul>
                    <ul>Bs: {user.company.bs}</ul>
                </div>
                
                <button onClick={() => navigate(-1)}>Back</button>
            </div>

            <div>
                <h2>User Albums</h2>
                {usersAlbum.map((album) => (
                <div key={album.id} style={{ border: '4px solid #ccc', padding: '10px' }}>
                    <Link 
                        to={`/albums/${album.id}`}
                        state={{album}}>
                        <p>{album.title}</p>
                  </Link>
                </div>
            ))}
            </div>

        </div>
    )
};

export default UserId
