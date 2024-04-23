import React from 'react';

const getCurrentHash = () => {
    return window.location.hash.replace('#', '').replace('#', '')
}

const navigate = (path) => {
    window.location.hash = '#/'+path
}
export const useNavigation = () => {
    const [newUrl, setState] = React.useState(getCurrentHash ())
    window.addEventListener('hashchange', function (e) {
       const path = getCurrentHash ()
       setState(path)
    });
    
    return [newUrl, navigate]
}
