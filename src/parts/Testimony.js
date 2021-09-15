import React from 'react';
import Fade from 'react-reveal/Fade';
import Star from 'elements/Star';
import Button from 'elements/Button';
import TestimonyAccent from 'assets/images/testimonial-frame.jpg';

export default function Testimony({data}) {
    return (
        <Fade bottom>
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="testimonial-hero" style={{ margin: `30px 0 0 30px` }}>
                                <img src={data.imageUrl} alt={data.name} className="position-absolute" style={{ zIndex: 1 }}></img>
                                <img src={TestimonyAccent} alt="testimonial" className="position-absolute" style={{ margin: `-30px 0 0 -30px` }}></img>
                            </div>
                        </div>
                        <div className="col-7">
                            <h4 className="mb-3">{data.name}</h4>
                            <Star value={data.rate} width={35} height={35} spacing={4}></Star> 
                            <h5 className="h2 font-weight-light line-height-2 my-3">
                                {data.content}
                            </h5>
                            <span className="text-gray-500">
                                {data.familyName}, {data.familyOccupation}
                            </span>
                            <div>
                                <Button className="btn px-5 mt-4" hasShadow isPrimary type="link" href={`/testimonial/${data._id}`}>Read Their Story</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    )
}
