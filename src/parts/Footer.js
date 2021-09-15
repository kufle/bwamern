import React from 'react';
import Button from 'elements/Button';
import IconText from './IconText';
export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <IconText />
                        <p className="brand-tagline">
                            We kaboom your beauty holiday instantly and memoriable.
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <h6 className="mt-2">For Beginner</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/register">New Account</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/properties">Start Booking a Room</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/use-payments">Use Payments</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h6 className="mt-2">Explore us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/careers">Our Careers</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/privacy">Privacy</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/terms">Terms & Conditions</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h6 className="mt-2">Connect us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" isExternal href="mailto:support@staycation.com">support@staycation.com</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" isExternal href="tel:+6212345678">021 - 2208 - 1996</Button>
                            </li>
                            <li className="list-group-item">
                                <span>Staycation, Kemang, Jakarta</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                        Copyrights 2020. All rights reserved. Staycation
                    </div>
                </div>
            </div>            
        </footer>
    )
}
