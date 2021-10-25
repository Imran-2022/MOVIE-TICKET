import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h3>Page Not found !!</h3>
            go <Link className="text-link" to="/">Home</Link>
        </div>
    );
};

export default NotFound;