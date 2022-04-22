import React from 'react';

const Footer = () => {
    let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    };
    return (
        <div>
     
            <p className="m-0 text-center text-danger fw-bold">
                    Copyright &copy;
                    <span> {getYear()} MD Asaduz Zsman </span>
                    <br /> Made with ❤️ by Asad  🔥
                </p>
        </div>
    );
};

export default Footer;