import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MenuContext } from "../../context/MenuContextProvider";
import { Item } from "../../model/BasicItemInterface";


interface Props {
    item: Item;
}

function BasicItem({item}: Props){


    return(
        <div>
            <h4>{item.name}</h4>
            
        </div>
    );
}

export default BasicItem;


