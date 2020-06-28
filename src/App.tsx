import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function App() {
    return (
        <React.Fragment>
            <h1 css={css`
            color: tomato;
            text-align: center;
            font-size: 2.5rem;
            `}>React & docker yass</h1>
        </React.Fragment>
    );
}

export default App;
