import {Link} from 'react-router-dom';

const Home: React.FC = () => {

    return (
        <div>
                <Link
                    to="/photos">
                    Photo List
                </Link>

                <Link
                    to="/albums">
                    Photo Albums
                </Link>

                <Link
                    to="/users">
                    Users
                </Link>
        </div>
    )
}

export default Home
