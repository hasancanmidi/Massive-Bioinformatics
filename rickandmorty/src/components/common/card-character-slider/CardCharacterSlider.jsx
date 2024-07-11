import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Slider from 'react-slick';
import { fetchCharacters } from '../../../redux/slices/characterSlice';
import '../../../pages/home/Home.css'

const CardCharacterSlider = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.items.slice(0, 30)); // Sadece ilk 30 karakteri göster
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCharacters());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="homepage-section">
      <Row>
        <Col>
          <h2 className='text-muted'>Characters</h2>
          <Slider {...settings}>
            {characters.map((character, index) => (
              <Card className='mt-3' key={index}>
                <Card.Img variant="top" src={character.image} alt={character.name} />
                <Card.Body>
                  <Card.Title>{character.name}</Card.Title>
                  <Card.Text>Status: {character.status}</Card.Text>
                  <Card.Text>Species: {character.species}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Slider>
        </Col>
      </Row>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block'}}
      onClick={onClick}
    />
  );
};

export default CardCharacterSlider;
