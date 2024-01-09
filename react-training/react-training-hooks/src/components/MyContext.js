import {useState, useContext, useEffect, useRef, createContext} from 'react';


//How to work with useContext ?
// Create Context: createContext()
//using the context, propogate context: useContext(<createdContext>)
//How to share in nested component hierarchy
    //<MyContext.Provider value='abc'>
    //<C1 />
    //<C2 />
    //</MyContext.Provider>
    
const MyContext = createContext();
export let SampleContext = () =>{
    let [content, setcontent]=useState({k1:'Main Content', k2:'Sub-Content-1', k3:'Sub-Content-2'})
   return (<MyContext.Provider value={content}>
            <h3>k1 is shared by provider:
                <span className='text-primary'>{content.k1}</span></h3>
            <CSub1/>
   </MyContext.Provider>)
}    
 
export let CSub1 = ()=>{
    let ctx = useContext(MyContext);
    return (<>
        <h4>In sub component 1</h4>
        <strong>Displaying k2 from context:
            <span className='text-warning'>{ctx.k2}</span></strong>
        <CSub2 shared={ctx.k3}/>
    </>)
}
 
export let CSub2 = (props)=>{
    let sctx =  useContext(MyContext);
    return (<>
    <h5>In sub component 2</h5>
        <div><strong>Displaying k3 from context using props:
            <span className='text-success'>{props.shared}</span></strong></div>
       
        <div><strong>Displaying k1 from context:
            <span className='text-success'>{sctx.k2}</span></strong></div>
       
        <div><strong>Displaying k2 from context:
            <span className='text-success'>{sctx.k1}</span></strong></div>
    </>)
}