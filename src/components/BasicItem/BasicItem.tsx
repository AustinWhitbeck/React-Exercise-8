import { useContext } from "react";
import { MenuContext } from "../../context/MenuContextProvider";
import { Item } from "../../model/BasicItemInterface";




function BasicItem(){

    const { menu } = useContext(MenuContext);

    return(
        <div>
            <h4>{menu}</h4>
            
        </div>
    );
}

export default BasicItem;