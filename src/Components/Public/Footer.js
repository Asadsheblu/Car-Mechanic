import React from 'react';

const Footer = () => {
    let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    };
    return (
        <div>
            <h1>This is Footer</h1>
            <p className="m-0 text-center text-danger fw-bold">
                    Copyright &copy;
                    <span> {getYear()} MD Asaduz Zsman </span>
                    <br /> Made with ❤️ by Asad  🔥
                </p>
        </div>
    );
};

export default Footer;