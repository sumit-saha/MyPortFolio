import React, { Component } from 'react';
import { Grid, cell } from 'react-mdl';
// import Background from '../images/Background.jpg';
//var bg = require('../images/Background.jpg');

class Landing extends Component{
    render(){
        return(
        // <div style={{width:'100%', margin: 'auto' }}>
        <div className="background" style={{width:'100%', margin: 'auto' }}>    
            <Grid className="landing-grid">
                <cell col={12}>
                    <img 
                    src="https://www.shareicon.net/data/256x256/2016/05/24/770137_man_512x512.png" 
                    alt="avatar" 
                    className='avatar-image'
                    />
                    <div className="banner-text">
                        <h1>Full stack web Developer</h1>
                    <hr />
                    <p>HTML/CSS | Python | Javascript | React | NodeJs | Express | MongoDB </p>
                    <div className="social-links">
                        {/* LinkedIn*/}
                        <a href="https://www.linkedin.com/in/sumit-kr-saha/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square"  aria-hidden="true" />
                        </a>
                        {/* GitHub */}
                        <a href="https://github.com/SumeetSaha" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square"  aria-hidden="true" />
                        </a>
                    </div>
                    </div>
                </cell>
            </Grid>
        </div>
        )
    }
}

export default Landing;