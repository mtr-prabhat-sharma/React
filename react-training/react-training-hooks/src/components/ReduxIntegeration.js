import { useDispatch, useSelector } from "react-redux";
import { buyicecream, buychocolate } from "../Actions/Actions";

export let MyShop = () => {
    const dispatchfn = useDispatch(); //redux built-in dispatch fn to dispatch action to redux store through reducer
    const shopData = useSelector(store => store.purchaseReducer); // assign redux global store (state obj) to variable
    console.log(shopData)

    // return (
    //     <div style={{ border: '2px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'120px', width:'300px', borderRadius:'10px', padding:'50px',marginLeft:'500px' }}>
    //         <div>
    //             <div className="text-primary">
    //                 Ice Cream Stock: {shopData.ice_stock}
    //             </div>
    //             <button className="btn btn-primary" onClick={() => dispatchfn(buyicecream())}>BUY ICECREAM</button>
    //         </div>
    //         <div>
    //             <div className="text-primary">
    //                 Chocolate Stock: {shopData.chocolate_stock}
    //             </div>
    //             <button className="btn btn-primary" onClick={() => dispatchfn(buychocolate())}>BUY CHOCOLATE</button>
    //         </div>
    //     </div>
    // );

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop:'200px' }}>
          <div style={{ border: '2px solid black', borderRadius: '10px', padding: '20px', width: '200px' }}>
            <div className="text-primary">
              Ice Cream Stock: {shopData.ice_stock}
            </div>
            <button className="btn btn-primary" onClick={() => dispatchfn(buyicecream())}>
              BUY ICE CREAM
            </button>
          </div>
          <div style={{ border: '2px solid black', borderRadius: '10px', padding: '20px', width: '200px' }}>
            <div className="text-primary">
              Chocolate Stock: {shopData.chocolate_stock}
            </div>
            <button className="btn btn-primary" onClick={() => dispatchfn(buychocolate())}>
              BUY CHOCOLATE
            </button>
          </div>
        </div>
      );
      
}
