import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './app/store';

import App from './app/App';
import ErrorBoundary from './app/ErrorBoundary';


const root = createRoot(
	document.getElementById('root')
);
root.render(
	<Provider store={store}>
		<ErrorBoundary>
  	<App />
		</ErrorBoundary>
	</Provider>
);
