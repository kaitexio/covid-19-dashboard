import React, {Suspense} from 'react'

import './app.css'
import Main from "./layout/Main";
import Dashboard from "./views/Dashboard";
import CircularProgress from '@material-ui/core/CircularProgress';


function App() {

    return (
        <div className="App">
            <Suspense fallback={<CircularProgress style={{textAlign:"center"}} />}>
                <Main>
                    <Dashboard/>
                </Main>
            </Suspense>
        </div>
    )
}

export default App
