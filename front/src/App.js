import React, {Suspense} from 'react'
import {Root, Routes} from 'react-static'
import {Router} from '@reach/router'


import './app.css'
import Main from "./layout/Main";
import CircularProgress from '@material-ui/core/CircularProgress';
import {Footer} from "./layout/Footer";
import Header from "./layout/Header";


function App() {
    return (
        <Root>
            <div className="App">
                <Suspense fallback={<CircularProgress style={{textAlign: "center"}}/>}>
                    <Header/>
                    <Main>
                        <Router>
                            <Routes default/>
                        </Router>
                    </Main>
                    <Footer/>
                </Suspense>
            </div>
        </Root>
    )
}

export default App
