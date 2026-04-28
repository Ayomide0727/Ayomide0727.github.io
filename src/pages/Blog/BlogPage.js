import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from "react-icons/ai";
import { FaPlay } from 'react-icons/fa';

import './BlogPage.css'
import { ThemeContext } from '../../contexts/ThemeContext';
import { pitchVideoData } from '../../data/pitchVideoData'
import { headerData } from '../../data/headerData'

function BlogPage() {

    const [videoError, setVideoError] = useState(false)
    const { theme } = useContext(ThemeContext);


    const useStyles = makeStyles((t) => ({
        home: {
            color: theme.secondary,
            position: 'absolute',
            top: 25,
            left: 25,
            padding: '7px',
            borderRadius: '50%',
            boxSizing: 'content-box',
            fontSize: '2rem',
            cursor: 'pointer',
            boxShadow: theme.type === 'dark' ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050' : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
            transition: 'all 0.3s ease-in-out',
            "&:hover": 
            {
                color: theme.tertiary,
                transform: 'scale(1.1)',
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '1.8rem',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className="blogPage" style={{backgroundColor: theme.secondary}}>
            <Helmet>
                <title>{headerData.name} | Elevator Pitch</title>
            </Helmet>
            <div className="blogPage--header" style={{backgroundColor: theme.primary}}>
                <Link to="/">
                    <AiOutlineHome className={classes.home}/>
                </Link>
                <div className="blogPage--headerCopy">
                    <p style={{color: theme.secondary70}}>Video introduction</p>
                    <h1 style={{color: theme.secondary}}>{pitchVideoData.title}</h1>
                </div>
            </div>
            <div className="blogPage--container">
                <div className="blogPage--content">
                    <div className="blogPage--videoCard" style={{backgroundColor: theme.primary400}}>
                        {!videoError ? (
                            <video
                                className="blogPage--video"
                                controls
                                playsInline
                                preload="metadata"
                                onError={() => setVideoError(true)}
                            >
                                <source src={pitchVideoData.videoSrc} type="video/mp4" />
                            </video>
                        ) : (
                            <div className="blogPage--videoFallback" style={{backgroundColor: theme.primary400}}>
                                <div className="blogPage--videoFallbackIcon" style={{backgroundColor: theme.secondary}}>
                                    <FaPlay />
                                </div>
                                <h2 style={{color: theme.secondary}}>{pitchVideoData.fallbackTitle}</h2>
                                <p style={{color: theme.secondary70}}>{pitchVideoData.fallbackText}</p>
                            </div>
                        )}
                    </div>

                    <div className="blogPage--summary" style={{backgroundColor: theme.primary400}}>
                        <h2 style={{color: theme.secondary}}>What this pitch covers</h2>
                        <p style={{color: theme.secondary70}}>{pitchVideoData.description}</p>
                        <ul>
                            {pitchVideoData.highlights.map((item) => (
                                <li key={item} style={{color: theme.secondary70}}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage
