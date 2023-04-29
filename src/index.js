import React from 'react';
import ReactDOM from 'react-dom/client';
import {add,subs,mult} from './components/CalcEvents';
function App() 
{
    return (

        <>
        <button type='button' onClick={add}>click for Additions</button>
        <button type='button' onClick={subs}>click for Susbtractions</button>
        <button type='button' onClick={mult}>click for Multiplications</button>
        
        </>

    )

}
const root=ReactDOM.createRoot(document.getElementById("fragements-app"));
root.render(<App />);




// const root=ReactDOM.createRoot(document.getElementById("fragements-app"));
// root.render(<>
// Calculations is {clcn()} {clcn1()}
// </>)


// single html elements

// const name=ReactDOM.createRoot(document.getElementById("fragements-app"));
// name.render(<h1>Hello Brijesh</h1>);

// framenets : access multiple html elements inside of react used fragments
// const name=ReactDOM.createRoot(document.getElementById("fragements-app"));
// name.render(
// <>
// <h1>Hello Brijesh</h1>
// <h3>Hello divesh</h3>
// </>
// );


// const name=ReactDOM.createRoot(document.getElementById("fragements-app"));
// name.render(
// <React.Fragment>
// <h1>Hello Brijesh</h1>
// <h3>Hello divesh</h3>
// </React.Fragment>
// );