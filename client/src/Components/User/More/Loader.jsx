import React from 'react'

import './Loading.scss'

const Loading = () => {
    return (
        <div className="loading">
            <div class="google-loader">
                <span className="google-loader-icon"></span>
                <span className="google-loader-icon"></span>
                <span className="google-loader-icon"></span>
                <span className="google-loader-icon"></span>
            </div>
        </div>
    )
}

export default Loading
