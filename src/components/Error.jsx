const Error = ({message}) => {
    return (
        <div className="bg-red-800 rounded-md p-3 mb-3">
            <p className="text-center text-white uppercase font-bold">{message}</p>
        </div>
    )
}

export default Error;