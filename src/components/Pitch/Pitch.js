import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { HiArrowRight } from "react-icons/hi";
import { FaPlay } from 'react-icons/fa';

import './Pitch.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { pitchVideoData } from '../../data/pitchVideoData'


function Pitch() {

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
        <div className="pitch" id="pitch" style={{backgroundColor: theme.secondary}}>
            <div className="pitch--header">
                <div className="pitch--headerCopy">
                    <p className="pitch--eyebrow" style={{color: theme.primary}}>{pitchVideoData.eyebrow}</p>
                    <h1 style={{color: theme.primary}}>{pitchVideoData.title}</h1>
                    <p className="pitch--intro" style={{color: theme.tertiary80}}>{pitchVideoData.description}</p>
                </div>
                <div className="pitch--viewAll">
                    <Link to="/pitch">
                        <button className={classes.viewAllBtn}>
                            {pitchVideoData.ctaLabel}
                            <HiArrowRight className={classes.viewArr} />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="pitch--body">
                <div className="pitch--videoCard" style={{backgroundColor: theme.primary400}}>
                    {!videoError ? (
                        <video
                            className="pitch--video"
                            controls
                            playsInline
                            preload="metadata"
                            onError={() => setVideoError(true)}
                        >
                            <source src={pitchVideoData.videoSrc} type="video/mp4" />
                        </video>
                    ) : (
                        <div className="pitch--videoFallback" style={{backgroundColor: theme.primary400}}>
                            <div className="pitch--videoFallbackIcon" style={{backgroundColor: theme.secondary}}>
                                <FaPlay />
                            </div>
                            <h3 style={{color: theme.secondary}}>{pitchVideoData.fallbackTitle}</h3>
                            <p style={{color: theme.secondary70}}>{pitchVideoData.fallbackText}</p>
                        </div>
                    )}
                </div>

                <div className="pitch--highlights" style={{backgroundColor: theme.primary400}}>
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

export default Pitch
