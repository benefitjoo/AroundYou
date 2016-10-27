import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout'
import App from './components/App';
import UploadView from './components/UploadView'
import Photo from './components/Photo'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

const rootElement = document.getElementById('wrap');

ReactDOM.render((<Router history={browserHistory}>
					<Route component={Layout}>
					  <Route path='/' component={App}>
					    <Route path="photo" component={Photo}/>
							<Route path="upload" component={UploadView}/>
						{/*<Route path="*" component={NoMatch}/>*/}
					  </Route>
					</Route>
				</Router>
	), rootElement);
