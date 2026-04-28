import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { HiArrowRight } from "react-icons/hi";
import { FaPlay } from 'react-icons/fa';

import './Blog.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { pitchVideoData } from '../../data/pitchVideoData'


function Blog() {

    const { theme } = useContext(ThemeContext);
    const [videoError, setVideoError] = useState(false)

    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: theme.tertiary, 
            backgroundColor: theme.primary,
            "&:hover": {
                color: theme.secondary, 
                backgroundColor: theme.primary,
            }
        },
        viewArr : {
            color: theme.tertiary, 
            backgroundColor: theme.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            "&:hover": {
                color: theme.tertiary, 
                backgroundColor: theme.secondary,
            }
        },
    }));

    const classes = useStyles();

    return (
        <div className="blog" id="pitch" style={{backgroundColor: theme.secondary}}>
            <div className="blog--header">
                <div className="blog--headerCopy">
                    <p className="blog--eyebrow" style={{color: theme.primary}}>{pitchVideoData.eyebrow}</p>
                    <h1 style={{color: theme.primary}}>{pitchVideoData.title}</h1>
                    <p className="blog--intro" style={{color: theme.tertiary80}}>{pitchVideoData.description}</p>
                </div>
                <div className="blog--viewAll">
                    <Link to="/pitch">
                        <button className={classes.viewAllBtn}>
                            {pitchVideoData.ctaLabel}
                            <HiArrowRight className={classes.viewArr} />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="blog--body">
                <div className="blog--videoCard" style={{backgroundColor: theme.primary400}}>
                    {!videoError ? (
                        <video
                            className="blog--video"
                            controls
                            playsInline
                            preload="metadata"
                            onError={() => setVideoError(true)}
                        >
                            <source src={pitchVideoData.videoSrc} type="video/mp4" />
                        </video>
                    ) : (
                        <div className="blog--videoFallback" style={{backgroundColor: theme.primary400}}>
                            <div className="blog--videoFallbackIcon" style={{backgroundColor: theme.secondary}}>
                                <FaPlay />
                            </div>
                            <h3 style={{color: theme.secondary}}>{pitchVideoData.fallbackTitle}</h3>
                            <p style={{color: theme.secondary70}}>{pitchVideoData.fallbackText}</p>
                        </div>
                    )}
                </div>

                <div className="blog--highlights" style={{backgroundColor: theme.primary400}}>
                    <h2 style={{color: theme.secondary}}>What the pitch covers</h2>
                    <ul>
                        {pitchVideoData.highlights.map((item) => (
                            <li key={item} style={{color: theme.secondary70}}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Blog
