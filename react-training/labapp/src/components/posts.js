import './style.css' ;

let posts = [
    {id:1, thumbnail:'logp.png', description:'Latest News'},
    {id:1, thumbnail:'logp.png', description:'Breaking News'},
    {id:1, thumbnail:'logp.png', description:'Good News'},
];

export function Posts(props) {
    return(
        <div className="posts">
            <img src={props.thumbnail} />
            <strong>{props.description}</strong>
            <div className='btn-class'>
            <button className='btn btn-primary'>Comment</button>
            </div>
        </div>
    )
}