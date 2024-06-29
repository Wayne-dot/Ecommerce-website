import { useEffect, useState } from "react";
import ItemDetails from "../components/ItemDetails";


const Home = () => {

    const [items, setitems] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/');
                if (response.ok) {
                    const json = await response.json();
                    setitems(json)
                }
                
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run once on mount
    

    return(
        <div className="Home">
            <div className="items">
                { items && items.map((item) => (
                    <ItemDetails key={item._id} item={item}/>
                ))}
                
            </div>
        </div>
    );
}


export default Home;



