import React, { useEffect, useState } from 'react';
import type { User } from '../types';
import { Link } from 'react-router-dom';

const UserList: React.FC = () => {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
            return response.json();
            })
            .then((data: User[]) => {
            setUsers(data);
            })
            .catch((error) => {
            console.error("Error fetching users", error)
            });
    }, []);

    if (!users) {
        return(<div>Loading users</div>)
    };

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '100px' }}>
            {users.map((user) => (
                <div key={user.id} style={{ border: '4px solid #ccc', padding: '10px' }}>
                    <Link 
                        to={`/users/${user.id}`}>
                        <p>{user.name}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default UserList
