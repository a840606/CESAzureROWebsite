import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import ButtonGroup from '../../elements/ButtonGroup';
import Button from '../../elements/Button';
import Image from '../../elements/Image';
import Modal from '../../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Atos Digital Cloud Services <span className="azure-title-color">Azure</span> <span className='romania-team-color'>Romania</span>
            </h1>
            <div className="container-xs">
              <div className='blank-space-height'></div>
           <div className='row-align'>
           <a data=" Cloud services as a business strategy for core processes" class="tip"><Image
                      src={require('./../../../assets/images/transparent_cloud_services.svg')}
                      alt="Features tile icon 02"
                      width={200}
                      height={200}
                      /></a>
                      <div className='blank-space'></div>
                      <a data=" Driving digital successes across the cloud adoption framework" class="tip">
                       <Image
                      src={require('./../../../assets/images/transformation.png')}
                      alt="Features tile icon 02"
                      width={100}
                      height={100} /></a></div>
        <div className='blank-space-height'></div>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button  tag="a" color="primary" wideMobile href="/overview">
                    Overview
                    </Button>
                    <Button tag="a" color="primary" wideMobile href="/serviceofferings">
                    Service Offerings
                    </Button>
                    <Button tag="a" color="primary" wideMobile href="/processandtechnologies">
                    Process and Technology
                    </Button>
                    <Button tag="a" color="primary" wideMobile href="/references">
                    References and Portfolio
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          {/* <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://www.youtube.com/watch?v=VLHRGtGjkO8"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div> */}
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://www.youtube.com/watch?v=VLHRGtGjkO8" // aici punem video pentru rulaj
            videoTag="iframe" />
        </div>
      </div>
      <h1 class="section-header">Work with us</h1>
  
  <div class="contact-wrapper">
    
  

    
    <form id="contact-form" class="form-horizontal" role="form">
       
      <div class="form-group">
      <Image
                      src={require('./../../../assets/images/UBC1.jpg')}
                      alt="Features tile icon 02"
                      width={600}
                      height={600} 
                    />
                    </div>
    </form>   
      <div class="direct-contact-container">
        <ul class="contact-list">
          <h3>Atos Head Office</h3>
          <p >Piața Consiliul Europei nr. 2A, Timișoara 300254, Romania</p> 
          <p ><a href="mailto:dl-ro-cloud-azureops@atos.net" title="Send me an email">dl-ro-cloud-azureops@atos.net</a></p>
        </ul>
      </div>
      
    
  </div>
    </section>
    
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;