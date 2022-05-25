import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.min.css'
import { Provider } from 'react-redux'
// import ScrollToTop from 'react-scroll-to-top'

import store from './Redux/store'
import './index.css'
import App from './App'
import ScrollToTop from './ScrollToTop'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop />
            <App />
        </BrowserRouter>
    </Provider>
)
