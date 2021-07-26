import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Slider from 'react-slick';
import { IMG_BASE_URL } from '../../http_api/config';
import { ArrowPrev, ArrowNext, BigArrowPrev, BigArrowNext } from './hepler';
import Spinner from '../loader';

const activeColor = '#FFDB11', inActiveColor = '#292929';

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      next: inActiveColor,
      prev: inActiveColor,
      play: true,
      playing: true,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  arrowActive = (active) => () => {
    const arrowColor = active === 'next' ? { next: activeColor, prev: inActiveColor } : {
      next: inActiveColor,
      prev: activeColor,
      play: false,
    };

    this.setState({ ...arrowColor, playing: false });
  };

  render() {
    const { serviceData } = this.props;
    return !serviceData.length ? <Spinner/> :
      (
        <div className="left-content-slider">
          <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            infinite={true}
            nextArrow={
              <BigArrowNext
                color={this.state.next}
                arrowActive={this.arrowActive('next')}/>}
            prevArrow={
              <BigArrowPrev
                color={this.state.prev}
                arrowActive={this.arrowActive('prev')}/>}

          >

            {serviceData.map(item => {
              return (
                <div className="slider-1" key={item.id}>

                  {!item.vimeo ? <img src={`${IMG_BASE_URL}${item.image}`} alt={''}/> : (
                    <>
                      <ReactPlayer
                        url={item.vimeo}
                        controls
                        playing={this.state.playing}
                        playIcon={<button onClick={() => this.setState({ playing: true })} className={'big-playIcon'}/>}
                        width="100%"
                        height="100%"
                        light={`${IMG_BASE_URL}${item.image}`}
                      />

                    </>)}
                </div>
              );
            })}

          </Slider>
          <Slider asNavFor={this.state.nav1}
                  ref={slider => (this.slider2 = slider)}
                  slidesToShow={7}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  infinite={false}
                  nextArrow={
                    <ArrowNext
                      className={'nextArrow'}
                      color={this.state.next}
                      arrowActive={this.arrowActive('next')}/>}
                  prevArrow={
                    <ArrowPrev
                      className={'prevArrow'}
                      color={this.state.prev}
                      arrowActive={this.arrowActive('prev')}/>}

          >

            {serviceData.map(item => {
              return (
                <div className="slider-2" key={item.id}>
                  <img src={`${IMG_BASE_URL}${item.image}`} alt=" "/>
                  {item.vimeo && <span className={'playIcon'}/>}
                </div>
              );
            })}

          </Slider>
        </div>
      );
  }
}

