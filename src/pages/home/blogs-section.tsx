import React from "react";
import sessions from "../../data/SessionsData.json";
import Slider from "react-owl-carousel";
import { Card } from "../../components";
import { CARD_TYPE_BLOG, SLIDER_RESPONSIVE_BREAKPOINTS } from '../../constants';
import translation from '../../locales/en-US/translation.json';

const BlogSection: React.FC = () => {
  let slider: any;
  let keyboardCode: number;

  const slideNext = () => {
    slider.next(500);
  }

  const slidePrev = () => {
    slider.prev(500);
  }

  const slideNextKeyBoard = (event: any) => {
    keyboardCode = event.keyCode;

    if (keyboardCode === 39) {
      slideNext();
    }
  }

  const slidePrevKeyBoard = (event: any) => {
    keyboardCode = event.keyCode;

    if (keyboardCode === 37) {
      slidePrev();
    }
  }

  return (
    <div className="container section-padding">
      <h2 className="item-header">{translation.translation.label["home-blogs-title"]}</h2>
      <div className="item-navigation">
        <div className="view-more-text">{translation.translation.label["view-more"]}</div>
        <div
          onClick={slidePrev}
          onKeyDown={slidePrevKeyBoard}
          role="button"
          tabIndex={0}
          className="mr-2"
        >
          <i className="far fa-arrow-alt-circle-left fa-lg nav-icon" />
        </div>
        &nbsp;
        <div
          onClick={slideNext}
          onKeyDown={slideNextKeyBoard}
          role="button"
          tabIndex={0}
        >
          <i className="far fa-arrow-alt-circle-right fa-lg nav-icon" />
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
          {sessions.data.map((session) => (
            <Card 
              key={session.id}
              id={session.id}
              title={session.title}
              type={CARD_TYPE_BLOG}
              imageUrl={session.image}
              author={session.presenter}
              link={session.link}
              dateTime={session.date}
            />
          ))}
        </Slider>
      
    </div> 
  );
};

export default BlogSection;
