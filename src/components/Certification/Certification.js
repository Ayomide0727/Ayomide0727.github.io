import React, { useContext} from 'react';

import './Certification.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { certificationData } from '../../data/certificationData'
import CertificationCard from './CertificationCard';

function Certification() {

    const { theme } = useContext(ThemeContext);
    const certifications = certificationData.certifications || [];
    return (
        <>
            {certifications.length > 0 && (
                <div className="certification" id="certification" style={{backgroundColor: theme.secondary}}>
                <div className="certification-body">
                    <h1 style={{color: theme.primary}}>Certifications</h1>
                    <h4 style={{color:theme.tertiary}}>{certificationData.bio}</h4>
                </div>
                <div className="certification-cards">
                    {certifications.map(cert => ( 
                        <CertificationCard 
                        key={cert.id}
                        id={cert.id}
                        title={cert.title}
                        details={cert.details}
                        date={cert.date}
                        field={cert.field}
                        image={cert.image}
                        link={cert.link}/>
                    ))}
                </div>
            </div>
            )}
        </>
    )
}

export default Certification
