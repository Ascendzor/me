import React from 'react';
import { Link } from "react-router-dom";

export default () => {
    return <div>
        <div style={{marginBottom: 20}}><Link to='/'>Home</Link> / <Link to='/blog'>projects</Link></div>
        <div style={{textAlign: 'center'}}>Not quite yet...</div>
    </div>
}