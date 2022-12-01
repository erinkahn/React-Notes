import { Container, Row, Col } from "react-bootstrap";
import { useInView } from 'react-intersection-observer';
import { stats } from '../../../constants/newData';
import Metrics from "../Metrics/Metrics";
const squares = './imagesNew/attributes-metrics/squares-left.svg';

export default function Benefits() {
  const [ref, inView] = useInView({
    threshold: 0,
    delay: 100
  });

  return (
    <Container className="keyattributes-container" fluid>
      <div className="bkg-squares">
        <img src={squares} alt="" />
      </div>
      <div className="bkg-squares-two">
        <img src={squares} alt="" />
      </div>
      
      <div className="inner-wrapper container-fluid col-12 col-md-11">
        <Metrics/>
        {stats.map((col, index) => {
          return (
            <div className={`metrics-container col-lg-11 ${index % 2 === 0 ? 'img-right' : 'img-left'}`} key={`stat-${index}`}>
                <Row className={`${(index % 2 !== 0) ? 'metric-alt' : ''} metric`}>
                    
                  <Col className={`image-column col-12 col-md-5 col-lg-6 justify-content-center mt-5 mb-5 ${inView ? 'slide-up' : ''}`}>
                    <img className="metric-image" src={col.image} alt="" />
                  </Col>

                  <Col className="col-12 col-md-7 col-lg-6 text-column">
                    <div className="stats-info">

                      {col.title && !col.stat && !col.stat2 && (
                        <>
                          <div ref={ref} className="title-only">
                            <p className="metric-title">{col.title}</p>
                            <span className="metric-subtitle">
                              {col.subtitle}
                            </span>
                          </div>
                        </>
                      )} 

                      {col.stat && !col.stat2 && (
                        <>
                          <div ref={ref} className={`single-stat`}>
                            <p className="metric-title">{col.stat}{col.suffix}</p>
                            <span className="metric-subtitle">
                              {col.subtitle}
                            </span>
                          </div>
                        </>
                      )}

                      {col.stat2 && col.stat && (
                        <>
                          <div ref={ref} className="two-stats d-flex">
                            <span className="metric-title-border">
                              <p className="metric-title">{col.stat}{col.suffix}</p>
                              <span className="metric-subtitle">{col.subtitle2}</span>
                            </span>

                            <span className="metric-title-padding">
                              <p className="metric-title">{col.stat2}{col.suffix}</p>
                              <span className="metric-subtitle">{col.subtitle}</span>
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                    <p className="metric-content mt-3">{col.content}</p>
                  </Col>
                </Row>
            </div>
          )
        })}
      </div>
    </Container>
  )
}