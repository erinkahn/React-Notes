import { downloadCardsData } from "../../constants/newData";
import { Container, Row } from "react-bootstrap";
import DownloadCards from "../Global/DownloadCards/DownloadCards";

export default function Resources() {
  return (
    <Container className="resources-container" fluid>
      <div className="inner-wrapper research-case-studies container-fluid col-md-11">
        <Row>
          <h2 className="section-title">Research &amp; case studies</h2>
        </Row>
        <Row className="columns-container">
          {downloadCardsData.researchCaseStudies.map((card, c) => {
            return (
              <DownloadCards key={`card-${c}`} title={card.title} content={card.content} link={card.link} image={card.image} />
            )
          })}
        </Row>
      </div>

      <div className="inner-wrapper product-specifications container-fluid col-md-11">
          <Row>
            <h2 className="section-title">Product Specifications</h2>
          </Row>
          <Row className="columns-container">
            {downloadCardsData.productSpecifications.map((card, p) => {
              return (
                <DownloadCards key={`card-${p}`} title={card.title} content={card.content} link={card.link} image={card.image}/>
              )
            })}
          </Row>
      </div>
    </Container>
  )
}