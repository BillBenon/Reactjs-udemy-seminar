import React from 'react';

import User from '../../components/user';

const authIndexPage = (props) => (
    <div>
        <h1>The Auth Index Page - {props.appName}</h1>
        <User name="Bill" age={16} />
    </div>
);

authIndexPage.getInitialProps = context => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ appName: "Super App" });
        }, 1000);
    });
    return promise;
};

export default authIndexPage;