import React from "react";
import Slider from "react-owl-carousel";
import {CARD_TYPE_EVENT, SLIDER_RESPONSIVE_BREAKPOINTS,} from "../../constants";
import {Card} from "../../components";
import translation from "../../locales/en-US/translation.json";
import pastEventList from '../../data/PastEventData.json';

const PastEvents: React.FC = () => {
    let slider: any;
    let keyboardCode: number;

    const slideNext = () => {
        slider.next(500);
    };

    const slidePrev = () => {
        slider.prev(500);
    };

    const slideNextKeyBoard = (event: any) => {
        keyboardCode = event.keyCode;

        if (keyboardCode === 39) {
            slideNext();
        }
    };

    const slidePrevKeyBoard = (event: any) => {
        keyboardCode = event.keyCode;

        if (keyboardCode === 37) {
            slidePrev();
        }
    };

    return (
        <div className="container mt-3">
            <h2 className="item-header">
                {translation.translation.label["event-past-events-title"]}
            </h2>

            
                    <div className="item-navigation">
                        <div className="view-more-text">
                            {translation.translation.label["view-more"]}
                        </div>
                        <div
                            onClick={slidePrev}
                            onKeyDown={slidePrevKeyBoard}
                            role="button"
                            tabIndex={0}
                            className="mr-2"
                        >
                            <i className="far fa-arrow-alt-circle-left fa-lg nav-icon"/>
                        </div>
                        &nbsp;
                        <div
                            onClick={slideNext}
                            onKeyDown={slideNextKeyBoard}
                            role="button"
                            tabIndex={0}
                        >
                            <i className="far fa-arrow-alt-circle-right fa-lg nav-icon"/>
                        </div>
                    </div>
                    <Slider
                        className="owl-theme"
                        dots={false}
                        loop={true}
                        margin={70}
                        responsive={SLIDER_RESPONSIVE_BREAKPOINTS}
                        ref={(slide) => {
                            slider = slide;
                        }}
                    >
                        {pastEventList.data.map((event) => (
                            <Card
                                key={event._id}
                                id={Number(event._id)}
                                title={event.title}
                                dateTime={event.dateTime.toString()}
                                description={event.description}
                                imageUrl={event.imageUrl}
                                
                                link={event.link}
                                tags={event.tags}
                                type={CARD_TYPE_EVENT}
                            />
                        ))}
                    </Slider>
                
            
        </div>
    );
};

export default PastEvents;
