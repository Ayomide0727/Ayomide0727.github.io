import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import { AiOutlineFolder } from "react-icons/ai";

import './Certification.css'

function CertificationCard({id, title, details, date, field, image, link}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        certificationCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();
    return (
        <Fade bottom>
           <div key={id} className={`certification-card ${classes.certificationCard}`}>
               <div className="certcard-content">
                    <div className="certcard-details1">
                        <h2 style={{color: theme.tertiary}}>{title}</h2>
                        <p style={{color: theme.tertiary80}}>{details}</p>
                        {link && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: theme.primary, fontWeight: 600 }}
                            >
                                View Certificate
                            </a>
                        )}
                    </div>
                    <div className="certcard-details2" style={{color: theme.primary}}>
                        <h5>{date}</h5>
                        <div className="certcard-field">
                            <AiOutlineFolder />
                            <h5>{field}</h5>
                        </div>   
                    </div>
                </div> 
                <div className="certcard-imgcontainer">
                    <img src={image} alt="" />
                </div>
           </div>
        </Fade>
        
    )
}

export default CertificationCard
