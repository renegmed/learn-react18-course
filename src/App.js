import {useState} from 'react';
import Navbar from './Navbar';
import List from './List'; 
import AddItem from './AddItem';
//import Counter from './CounterClass';
// import Counter from './Counter';
function App() {
    const [guitars, setGuitars] = useState([
        {title: 'Strat'}, 
        {title: 'Les Paul'},
        {title: 'Explorer'}]);
    
    // sames as pass object as props (read only)
    // const stuff = List({title: 'Guitars', items: guitars});
    // then use as {stuff} instead of <List .../>

    function updateGuitars(newGuitar) {
        // spread out existing guitars and append new guitar
        setGuitars([...guitars, newGuitar]); 
    }

    return (
        <>
            <Navbar title="Uncontrolled Inputs" />
            <div className="container">
                <AddItem buttonText="Add Guitar" onSubmit={updateGuitars}/>
                <List 
                    title="Guitars"
                    items={guitars}            
                />                
            </div>
        </>
        
    );
}

export default App;

