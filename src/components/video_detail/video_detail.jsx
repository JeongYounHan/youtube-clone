import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video }) => {
  return (
    <section className={styles.detail}>
      <iframe title="youtube" className={styles.video} src={`https://www.youtube.com/embed/${video.id}`} type="text/html" width="100%" height="500px" frameBorder="0" allowFullScreen></iframe>
    </section>
  );
};

export default VideoDetail;
