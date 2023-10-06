function C4()
{
    const arr = ["Raj","Rahul","Shankar","George","Kevin"];

    const ListItems = () => {
        return arr.map((val,ind)=>{
            return <li key={ind}>{val}</li>
        })
    }
    return(
        <div>
            <h1>List items in react</h1>
            <ol>
                {ListItems()}
            </ol>
        </div>
    )
}

export default C4;
