import React, { useContext } from 'react';
import { AuthContext } from '../Contex/AuthContextProvider';

const Home = () => {
    const all = useContext(AuthContext);
    console.log(all);
    return (
        <div>
            <h1>This is home Component</h1>
        </div>
    );
};

export default Home;