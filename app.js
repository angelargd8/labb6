/*
ReactDOM.render(
    
    <blog />,

    document.getElementById('master')
)
*/
import { createRoot } from 'react-dom'
import React from 'react'
import Blog from './blog'

const root = createRoot(document.getElementById('master'))
root.render(<Blog />)


