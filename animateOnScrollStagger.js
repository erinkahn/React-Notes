// onScroll Stagger animations:

// JSX

  import { useInView } from 'react-intersection-observer';

  export default function Benefits() {
    const [ref, inView] = useInView({
      threshold: 0.2,
      delay: 100
    });

    return (
      <Container>
        <div ref={ref}>
          <Row className={`columns-container ${inView ? 'inview-cascade-fade-up' : 'outview-cascade-fade-up'}`}>
            {benefitsColumns.map((col, b) => {
              return (
                <Col className="column" key={`col-${b}`}>
                  <h4 className="col-title">{col.title}</h4>
                  <p className="col-content">{col.content}</p>
                </Col>
              )
            })}
          </Row>
        </div>
      </Container>
    )
  }


// CSS

// loop through children and add a delay on each of them so they appear one by one

  @mixin transition {
    @for $i from 1 through 5 {
      &:nth-child(#{$i}) {
        transition-delay: #{$i * 100ms};
      }
    }
  }

  .columns-container{
     &.inview-cascade-scale-in {
        .column {
          @include transition;
        }
      }
  }
