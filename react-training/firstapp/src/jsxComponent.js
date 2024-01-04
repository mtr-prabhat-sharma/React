

export function C1() {
    return (<header>My React Wall</header>);
}


//JSX component - Binding to an object data
let NPAT = () => {
    let user = [
        {
            name: 'Meena',
            thumbnail: 'https://via.placeholder.com/150/66b7d2',
            country: 'Bharat',
            animal: 'Lion',
            thing: 'Showpiece'
        },
        {
            name: 'Jon',
            thumbnail: 'https://via.placeholder.com/150/66b7d2',
            country: 'Bharat',
            animal: 'Lion',
            thing: 'Showpiece'
        }
    ]
    let divArray = [];
    for(let i=0;i<user.length;i++) {
        divArray.push(
            <div>
                {user[i].name} | {user[i].country} | {user[i].animal} | {user[i].thing} | {user[i].thumbnail}
            </div>
        )
    }
    return (
        divArray
    );
}

export let Mapper = () => {
    let arr = ['Gulab jamun', 'barfi','boondi laddu'];
    // return (
    //     arr.map((sweet) => {
    //         //return (<p>Awesome {sweet}</p>)
    //         return `Awesome ${sweet}`
    //     })
    // )

    
    let res = arr.map((sweet) => {
                //return (<p>Awesome {sweet}</p>)
                return `Awesome ${sweet}`
            })
     return (res);   

    // return (
    //     <p>
    //         arr.map((sweet) => {
    //                 //return (<p>Awesome {sweet}</p>)
    //                 return `Awesome ${sweet}`
    //             })
    //     </p>
    // )
}



var username = 'Prabhat'
let Greetings = () => <p>Hello, {username} !</p>

export default Greetings;