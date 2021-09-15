import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'elements/Button';
import ImgHero from 'assets/images/beach.jpg';
import ImgFrame from 'assets/images/frame.png';
import IcCities from 'assets/images/icon/ic_cities.svg';
import IcTraveler from 'assets/images/icon/ic_traveler.svg';
import IcTreasure from 'assets/images/icon/ic_treasure.svg';

export default function Hero(props) {

    const showMostPicked = () => {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop-30,
            behavior: "smooth"
        });
    }

    return (
        <Fade bottom>
            <section className="container pt-4">
                <div className="row">
                    <div className="col-lg-5">
                        <h1 className="font-weight-bold line-height-1 mb-3">
                            Forget Busy Work, <br/>
                            Start Next Vacation
                        </h1>
                        <p className="mb-5 text-gray-600 w-75">
                            We provide what you need to enjoy your holiday with family. Time to make another memorable moments.
                        </p>
                        <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                            Show me now
                        </Button>

                        <div className="row mt-5 d-flex">
                            <div className="col-auto">
                                <img src={IcTraveler} alt={`${props.data.travelers} Travelers`} width="36" height="36" />
                                <h6 className="mt-3">
                                    {props.data.travelers} <span className="text-gray-500 font-weight-light">Travelers</span>
                                </h6>
                            </div>

                            <div className="col-auto">
                                <img src={IcTreasure} alt={`${props.data.treasures} Treasure`} width="36" height="36" />
                                <h6 className="mt-3">
                                    {props.data.treasures} <span className="text-gray-500 font-weight-light">Treasure</span>
                                </h6>
                            </div>

                            <div className="col-auto">
                                <img src={IcCities} alt={`${props.data.cities} Cities`} width="36" height="36" />
                                <h6 className="mt-3">
                                    {props.data.cities} <span className="text-gray-500 font-weight-light">Cities</span>
                                </h6>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-7">
                        <div className="image-hero">
                            <img src={ImgHero} alt="Beautiful Place" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    )
}
