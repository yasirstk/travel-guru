import React from 'react';
import './Hotels.css';

const Hotels = () => {
    return (
        <div className="pt-5">
            <div className="row HotelData">
                <div className="col-7 mr-auto hotels">
                    <div className="col-12">
                        <div className="row">
                            <div>
                                <p>Cox's Bazar Hotel image</p>
                            </div>
                            <div>
                                <p>Cox's Bazar Hotel Details</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                    <div className="row">
                            <div>
                                <p>Sylhet  Hotel image</p>
                            </div>
                            <div>
                                <p>Sylhet Hotel Details</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                    <div className="row">
                            <div>
                                <p>Sundarban Hotel image</p>
                            </div>
                            <div>
                                <p>Sundarban Hotel Details</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-5 googlemap ">
                    google map
                </div>
            </div>
        </div>
    );
};

export default Hotels;