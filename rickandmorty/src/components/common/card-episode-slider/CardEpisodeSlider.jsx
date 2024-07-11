import React, { useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Slider from 'react-slick';
import { fetchEpisodes } from '../../../redux/slices/episodeSlice';
import { useDispatch, useSelector } from 'react-redux';

const CardEpisodeSlider = () => {
  const dispatch = useDispatch();
  const episodes = useSelector((state) => state.episodes.items.slice(0, 30));
  const status = useSelector((state) => state.episodes.status);
  const error = useSelector((state) => state.episodes.error);

  useEffect(() => {
      if (status === 'idle') {
          dispatch(fetchEpisodes());
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
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="homepage-section">
        <Row>
          <Col>
            <h2 className='text-muted'>Episodes</h2>
            <Slider {...settings}>
              {episodes.map((episode, index) => (
                <Card key={index} style={{ margin: '0 60px' }} className='mt-3'>
                  <Card.Body className='card-body'>
                    <Card.Title>{episode.name}</Card.Title>
                    <Card.Text>Air Date: {episode.air_date}</Card.Text>
                    <Card.Text>Episode: {episode.episode}</Card.Text>
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
      style={{ ...style, display: 'block'}}
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

export default CardEpisodeSlider;
