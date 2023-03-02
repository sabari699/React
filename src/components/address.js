export default function Address(props) {
    return (
        <>
        <div>
            <h2>Address {props.name} {props.size}</h2>
            <button onClick={() => props.functiocall()}>child page button</button>
        </div>
        </>
    )
}
