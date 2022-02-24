import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import styled from 'styled-components';
import URL from '../../FetchURL/LibrarayURL';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = ({ marginBottom }) => {
  const [countryName, setCountryName] = useState('Korea');
  const [countryBook, setCountryBook] = useState([]);
  const [countryLocation, setCountryLocation] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${URL}/books/location`)
      .then(res => res.json())
      .then(res => {
        setCountryLocation(res.message);
      });
  }, []);

  useEffect(() => {
    fetch(`${URL}/books/slide?category=${countryName}`)
      .then(res => res.json())
      .then(res => {
        setCountryBook(res.result);
      });
  }, [countryName]);

  const bookDetail = id => {
    navigate(`/productDetail/${id}`);
  };

  const makeIconOption = location => {
    return {
      fontSize: '40px',
      color: 'black',
      top: location.latitude,
      left: location.longitude,
      position: 'absolute',
    };
  };

  return (
    <BannerFirstBox marginBottom={marginBottom}>
      <BannerSecondBox>
        <MapImg src="/images/Main/map4.png" alt="세계지도" />
        {countryLocation.map(location => {
          return (
            <FontAwesomeIcon
              style={makeIconOption(location)}
              className="hover"
              icon={faLocationPin}
              key={location.id}
              onClick={() => {
                setCountryName(location.name);
              }}
            />
          );
        })}

        <CountryTitle>{countryName}</CountryTitle>
        <StyledSlider {...settings}>
          {countryBook.map((book, i) => {
            return (
              <Imgs
                onClick={() => {
                  bookDetail(book.id);
                }}
                key={i}
                src={book.image}
                alt={`book${i}`}
              />
            );
          })}
        </StyledSlider>
      </BannerSecondBox>
    </BannerFirstBox>
  );
};

const settings = {
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 6,
  centerMode: true,
};

const StyledSlider = styled(Slider)`
  position: absolute;
  bottom: -20px;

  .slick-list {
    width: 100vw;
    height: 390px;
  }

  .slick-track {
    top: 100px;
  }

  .slick-slide {
    display: flex;
    align-items: center;
  }

  img {
    width: 150px;
    height: 200px;
  }

  .slick-arrow.slick-prev {
    left: 14.5%;
    z-index: 1000;

    &::before {
      font-size: 50px;
      line-height: 0.5;
    }
  }

  .slick-arrow.slick-next {
    right: 22%;

    &::before {
      font-size: 50px;
      line-height: 0.5;
    }
  }
`;

const BannerSecondBox = styled.div`
  position: relative;
`;

const Imgs = styled.img`
  width: 100px;
  height: 200px;
  box-shadow: 5px 5px 5px #000;
`;

const BannerFirstBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${props => props.marginBottom};

  .hover:hover {
    color: #f29800 !important;
  }
`;

const MapImg = styled.img`
  width: 100vw;
  height: auto;
`;

const CountryTitle = styled.span`
  position: absolute;
  top: 8.5%;
  left: 45%;
  font-family: 'Song Myung', serif;
  font-size: 60px;
  font-weight: 700;
`;

export default Banner;
