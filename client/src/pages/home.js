import { useEffect, useState } from "react";
import ItemDetails from "../components/ItemDetails";
import ImagePath from '../assets/Page_Images/fasion1.jpg'

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

            <div className="flex justify-center items-center">
                <div className="relative w-full flex justify-center items-center">
                    <img src={ImagePath} alt="demo" className="object-cover custom-size" />
                    <div className="absolute flex flex-col items-center">
                    <h4 className="text-white text-2xl mt-96">Early access: Spring 2025</h4>
                    <h4 className="text-white text-base	underline">Discover Collection</h4>
                    </div>
                </div>
            </div>


            <section class="bg-white">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-full">
                    <div class="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
                        {items && items.map((item) => (
                            <ItemDetails key={item._id} item={item}/>
                        ))}
                    </div>
                </div>  
            </section>


        </div>
    );
}


export default Home;



