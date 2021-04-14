import React from 'react';

function Button() {
    const wrapper = {
        color: 'rgb(18, 255, 18)',
        backgroundColor: 'transparent',
        border: 0,
        fontFamily: 'Courier',
        fontSize: '33pt'
    };
    return ( <button data-testid="element-button" style={wrapper}>Wake up Neo...</button>);
}
export default Button;