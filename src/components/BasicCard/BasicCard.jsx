import React from "react";
import "./BasicCard.scss";

const Media = ({ image, videoLink, title }) => {
  if (image) {
    return <img src={image} alt=" " />;
  } else if (videoLink) {
    return (
      <iframe
        title={`${title} video`}
        src={videoLink}
        allowFullScreen
        frameBorder={0}
      />
    );
  }

  return null;
};

const BasicCard = ({ image, videoLink, title, caption, children }) => {
  return (
    <div className="basic-card--wrapper">
      <div className="info">
        {title.split(" ").map((word) => (
          <span className="highlight">{word} </span>
        ))}
        {children}
      </div>
      <div className="basic-card--media-section">
        <Media image={image} videoLink={videoLink} title={title} />
        {caption && <p>{caption}</p>}
      </div>
    </div>
  );
};

export default BasicCard;
