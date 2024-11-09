
import React from 'react';

const Logo = ({ className, size = 40 }) => {
    return <div className={`static-tesseract-container ${className}`}
        style={{
            '--logo-size': `${size}px`,
        }}
    >

        <div className="static-tesseract">
            <div className="static-cube static-outer-cube">
                <div className="static-face static-front"></div>
                <div className="static-face static-back"></div>
                <div className="static-face static-right"></div>
                <div className="static-face static-left"></div>
                <div className="static-face static-top"></div>
                <div className="static-face static-bottom"></div>
            </div>
            <div className="static-cube static-inner-cube">
                <div className="static-face static-front"></div>
                <div className="static-face static-back"></div>
                <div className="static-face static-right"></div>
                <div className="static-face static-left"></div>
                <div className="static-face static-top"></div>
                <div className="static-face static-bottom"></div>
            </div>
        </div>
    </div>
};

export default Logo;
