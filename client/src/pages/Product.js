import { useParams } from "react-router-dom";

const Product = () => {

    const {id} = useParams();

    return (
        <h3>Product page with id {id}</h3>
    );
}

export default Product