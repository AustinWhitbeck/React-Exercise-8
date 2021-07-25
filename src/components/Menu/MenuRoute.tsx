import { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../../context/MenuContextProvider";



function MenuRoute(){

    const { menu } = useContext(MenuContext);
    

    return(
        <div>
            <h3>Menu</h3>
            <ul>
                {menu.map((item, index) => 
                <li key={`${item.name}-${index}`}>
                    <h3>{item.name}</h3>
                    <ul>
                        <li>About: {item.description}</li>
                        <li>Price: ${item.price}</li>
                        <li>Calories: {item.calories}</li>
                        <li>Vegetarian: {item.vegetarian ? "Yes" : "No" }</li>
                    </ul>
                    <Link to={`/details/${item.id}`}>Details</Link>
                </li>
                )}
            </ul>
        </div>


        // <div>
        //     <h3>Menu</h3>
        //     <ul>
        //         {menu.map((item, index) => 
        //         <li key={`${item.name}-${index}`}>
        //             <h3>{item.name}</h3>
        //             <ul>
        //                 <li>About: {item.description}</li>
        //                 <li>Price: ${item.price}</li>
        //                 <li>Calories: {item.calories}</li>
        //                 <li>Vegetarian: {item.vegetarian ? "Yes" : "No" }</li>
        //             </ul>
        //             <Link to={`/details/${item.id}`}>Details</Link>
        //         </li>
        //         )}
        //     </ul>
        // </div>


    );
}

export default MenuRoute;