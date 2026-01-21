import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="notFound">
            <h2>Sorry</h2>
            <p>That page could not be found</p>
            <Link to="/">Back to the Homepage...</Link>
        </div>
     );
}
 
export default NotFound;