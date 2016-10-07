import React from 'react'
import Helmet from 'react-helmet'
import Nav from './Nav'

const App = ({ children }) => (
    <div>
        <Helmet title="React Production Starter" titleTemplate="%s - React Production Starter" />
        <h1>React Production Starter</h1>
        <Nav />
        {children}
        <footer>
            Copyright © 2016 <a href="http://www.sevenwestmedia.com.au/" target="_blank" rel="noopener noreferrer">Seven West Media</a>
        </footer>
    </div>
)

export default App
