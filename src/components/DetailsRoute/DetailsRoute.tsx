import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MenuContext } from "../../context/MenuContextProvider";
import { Item } from "../../model/BasicItemInterface";


interface RouteParams {
    id: string;
}

function DetailsRoute(){

    const { menu } = useContext(MenuContext);

    const { id } = useParams<RouteParams>();

    const selectedItem: Item | undefined = menu.find((item) => item.id === id);

    return(
        <div>
            <h3>details route</h3>
            <h3>Name: {selectedItem?.name} </h3>
        </div>
    );
}

export default DetailsRoute;