import React from "react";
import pizzas from "../pizzasdata";
import Pizza from "../Components/Pizza";
import {useDispatch} from "react-redux";
import {getAllPizzas} from "../actions/pizzaActions";
export default function HomePage(){

    const dispatch = useDispatch();
  /*  const pizzasState  = useSelector(state => state.getAllPizzasReducer)
    const {pizzas, error, loading} = pizzasState;*/
    React.useEffect(()=>{
        dispatch(getAllPizzas());

    },[])
    return (
        <div>
            <div className="row">
                {pizzas.map(pizza=>{
                    return <div className="col-md-4">
                        <div>
                            <Pizza pizza={pizza}/>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}