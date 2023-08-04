import React from "react";
import {translation} from '../../locales/en-US/translation.json';
import links from '../../data/ResourcesData.json';

const ResourcesSection: React.FC = () => (
    <div className="who-we-are-section">
        <h2 className="text-center header">{translation.label["resources-links-title"]}</h2>
        {links.data.map((link) => (
        <div className="container hover-shadow rounded-link text-center mt-3 p-2">
            <div className="row align-items-start">
                <div className="col">
                    <div className="row">
                        <div className="col about-us-description">{link.title}</div>
                    </div>
                    <div className="row">
                        <div className="col contact-us-header-description">{link.description}</div>
                    </div>
                </div>
                <div className="col my-auto"><a href={link.link} target="_blank" rel="noopener noreferrer"><button className="btn home-primary-btn">{translation.button["open-resources"]}</button></a></div>
            </div>
        </div>
        
        ))}
    </div>
);

export default ResourcesSection;