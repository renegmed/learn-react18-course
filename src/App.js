import Navbar from './Navbar';
import List from './ListClass'; 
import Counter from './CounterClass';
// import Counter from './Counter';
function App() {
    const guitars = ['Strat', 'Les Paul', 'Explorer'];
    
    // sames as pass object as props (read only)
    // const stuff = List({title: 'Guitars', items: guitars});
    // then use as {stuff} instead of <List .../>

    return (
        <>
            <Navbar title="Getting Started with State" />
            <div className="container">
                <List 
                    title="Guitars"
                    items={guitars} 
                />
                <Counter />
            </div>
        </>
        
    );
}

export default App;

