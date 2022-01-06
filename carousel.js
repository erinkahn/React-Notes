import React, {useState} from 'react';
import { Container, Col, Row } from "react-bootstrap";
import { carouselSlides } from '../../constants/newData';
import { useInView } from 'react-intersection-observer';

export default function Carousel() {
  const [ref, inView] = useInView({
    threshold: 0.5
  });
  const [isActive, setActive] = useState(0);
  const [slide, setSlide] = useState(0);

  let index = slide;

  const showNextSlide = () => {
    index++;
    setSlide(index);

    if (index > carouselSlides.length - 1) {
      index = 0;
      setSlide(index);
    }
  };

  const showPrevSlide = () => {
    index--;
    setSlide(index);

    if (index < 0) {
      index = carouselSlides.length - 1;
      setSlide(index);
    }
  };

  const toggleActive = (index) => {
    setActive(index);
  }

  return(
    <Container className="carousel-container" fluid>
      {carouselSlides.map((bkg, i) => {
        return (
          <Col className={`slide-image ${isActive === i ? "active" : ""}`} key={`image-${i}`} style={{backgroundImage: `url(${bkg.image})`}}></Col>
        )
      })}
      <div ref={ref} className="container-fluid inner-wrapper">
        <Row className={`carousel-pagination d-flex ${inView ? 'inview-cascade-scale-in' : 'outview-cascade-scale-in'}`}>
            {carouselSlides.map((slide, s) => {
              return (
                <button 
                  className={`col-md-3 col-sm-6 link ${isActive === s ? "active" : ""}`}
                  style={{transitionDelay: s * 200}} 
                  key={`pager-${s}`}
                  aria-current={`${isActive === s ? true : false}`}
                  onClick={() => { 
                    setSlide(s); 
                    toggleActive(s);
                  }}>
                  {slide.title}
                </button>
              )
            })}
        </Row>

        <Row className="carousel-content">
          <Col className="pager-wrapper d-flex" xs="6 justify-content-start" md="2">
            <button
              className="prev pager"
              tabIndex="0" 
              aria-label="Previous Slide" 
              onClick={() => { 
                showPrevSlide(); 
                toggleActive(index);
              }}>  
            </button>
          </Col>

          {carouselSlides.map((slideContent, c) => {
            return (
              <Col className={`slide ${isActive === c ? "active" : ""} ${inView ? 'slide-up' : ''}`} key={`slide-${c}`} xs="12" md="8">
                <h2 className="slide-title">{slideContent.title}</h2>
                <p className="slide-content">{slideContent.content}</p>
              </Col>
            )
          })}

          <Col className="pager-wrapper d-flex" xs="6 justify-content-end" md="2">
            <button className="next pager" 
              tabIndex="0" 
              aria-label="Next Slide" 
              onClick={() => { 
                showNextSlide(); 
                toggleActive(index)
              }}>  
            </button>
          </Col>
        </Row>
      </div>
    </Container>
  )
}