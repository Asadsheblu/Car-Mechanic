import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div clasName="mx-auto">
             <Spinner animation="border" variant="secondary" />
        </div>
    );
};

export default Loading;