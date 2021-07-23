import { useContext } from "react";
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
                </li>
                )}
            </ul>
        </div>


    );
}

export default MenuRoute;