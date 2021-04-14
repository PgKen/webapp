import React from "react";
import ReactPlayer from "react-player/youtube";


const Companyclip = () => {
  return (
    <div className="news-content">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=-0r7TyLNsLc&t=203s"
        width='100%'
        height='90%'
        controls={true}
        playing={false}
        height="520px"
        //style={{ overflow: "hidden" }}
      />
    </div>
  );
};

export default Companyclip;
