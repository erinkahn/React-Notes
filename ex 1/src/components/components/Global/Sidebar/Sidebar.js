import React, {useState, useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';

export default function Sidebar({classStyle, title, leftBorder, backgroundColor}) {
  const [ scrolled, setScrolled ] = useState(0);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <Container style={{backgroundColor: backgroundColor}} className={`sidebar-container ${leftBorder ? 'green-border' : ''}`}fluid>   
        <Row className={`sidebar col-12 col-sm-9 ${scrolled ? 'translate' : ''} ${classStyle}`}>
          <p className="sidebar-content m-auto col-md-11">{title}</p>
        </Row>
    </Container>
  )
}