import { Col } from "react-bootstrap";
import { useInView } from 'react-intersection-observer';

export default function DownloadCards({title, content, link, image}) {
  const [ref, inView] = useInView({
    threshold: 0.7,
    delay: 200
  });

  return (
    <Col ref={ref} className={`download-card`}>
      <a className="image-link" download href={link}>
        <div className={`image-box ${inView ? 'reposition' : ''}`} style={{backgroundImage: `url(${image})`}}></div>
      </a>
      <div className={`content-box ${inView ? 'fadeIn' : ''}`}>
        <h3 className="box-title">{title}</h3>
        <p className="box-content">{content}</p>
        <a className="box-link" download href={link}>Download PDF</a>
      </div>
    </Col>
  )
}