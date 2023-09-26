import React from "react";
import moment from "moment";
import { ICard } from "../../interfaces/CardInterface";
import translation from "../../locales/en-US/translation.json";

const HtmlToReactParser = require("html-to-react").Parser;

const convertToPlain = (html: string) => {
  const htmlToParser = new HtmlToReactParser();
  const reactElement = htmlToParser.parse(html);
  return reactElement;
};

const Card: React.FC<ICard> = ({
  title,
  type,
  author,
  imageUrl,
  tags,
  dateTime,
  link,
  description,
  socialMediaURLs,
  icon,
}) => (


  <div className="card-height">
    <div className="cell">
      <div className="card card-block mb-3">
        {type === "BLOG" ? (
          <div className="card-blog">
          
          {imageUrl && (
                      <img src={imageUrl} className="card-img-top" alt="post-flyer" />
                    )}

            {icon && (
              <div className="d-flex justify-content-center mt-4">
                <i className={icon} />
              </div>
            )}
            <div className="card-body">
              {tags &&
                tags.length > 0 &&
                tags.slice(0, 2).map((tag, index) => (
                  <span
                    key={index}
                    className="badge rounded-pill text-dark card-tag"
                  >
                    {tag.toUpperCase()}
                  </span>
                ))}

              <div className="row">
                <h5 className="card-title">{title}</h5>
                {author && (
                  <p className="card-description">
                    <span>
                      <span className="card-blog-emoji" />
                      <span className="mx-1 author-name">{author}</span>
                    </span>

                    {dateTime && (
                      <div className="datetime">
                        <span className="card-calendar-emoji" />
                        <span className="card-datetime">
                          Published On {moment(dateTime).format("LL")}
                        </span>
                      </div>
                    )}
                  </p>
                )}
              </div>

              {link && (
                <div className="row mt-3">
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="d-flex justify-content-center"
                  >
                    <button className="btn card-btn button">
                      {translation.translation.button["read-more"]}
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        ) : null}

        {type === "EVENT" ? (
          <div className="card-event">
            {/* {imageUrl && (
              <img src={imageUrl} className="card-img-top" alt="post-flyer" />
            )} */}

            <div className="card-body">
              {tags &&
                tags.length > 0 &&
                tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="badge rounded-pill text-dark card-tag"
                  >
                    {tag.toUpperCase()}
                  </span>
                ))}

              <div className="row">
                <h5 className="card-title">{title}</h5>
                {description && (
                  <p className="card-description">{convertToPlain(description)}</p>
                )}
              </div>

              {imageUrl && (
                <img src={imageUrl} className="card-img-top" alt="post-flyer" />
              )}

              {dateTime && (
                <div className="row">
                  <div className="event-datetime d-flex justify-content-center">
                    <span className="card-event-calendar-emoji" />
                    <span className="card-datetime">
                      {moment(dateTime).format("LLL")}
                    </span>
                  </div>
                </div>
              )}

              {link && (
                <div className="row mt-3">
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="d-flex justify-content-center"
                  >
                    <button className="btn card-btn button">
                      {translation.translation.button["more-info"]}
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  </div>
);

export default Card;
