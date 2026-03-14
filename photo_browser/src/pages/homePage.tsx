import {Link} from 'react-router-dom';

const Home: React.FC = () => {

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                <Link style={{ border: '4px solid #ccc', padding: '10px', gap: '10px' }}
                    to="/photos">
                    Photos
                </Link>

                <Link style={{ border: '4px solid #ccc', padding: '10px'}}
                    to="/albums">
                    Albums
                </Link>

                <Link style={{ border: '4px solid #ccc', padding: '10px', gap: '10px' }}
                    to="/users">
                    Users
                </Link>
        </div>
    )
}

export default Home
