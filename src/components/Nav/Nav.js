import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Nav (props) {
    return (
        <div>
            Nav
            <br/>
            <Link to='/dashboard'><button className="btn">Home</button></Link>
            <br/>
            <Link to='/post/:id'><button className="btn">New Post</button></Link>
            <br/>
            <Link to='/'><button className="btn">Logout</button></Link>
            <div className="username">
                {props.username}
            </div>
            <div className="profpic">
                {props.profilePicture}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        username: state.username,
        profilePicture: state.password
    }
}

export default connect(mapStateToProps)(Nav);