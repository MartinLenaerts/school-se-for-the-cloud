import React from 'react';
import {Link} from "react-router-dom";


function Home() {
    return (
        <div style={{display: "flex"}}>
            <div style={{margin: "auto", textAlign: "center"}}>
                Hello !
                <div>
                    <Link to="/users">
                        <button>Show users</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
