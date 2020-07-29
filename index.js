import { registerRootComponent } from 'expo';
import React from 'react';
import App from './App';

import { Provider } from 'react-redux';
import store from './Store/index';

const Root = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

registerRootComponent(Root);
