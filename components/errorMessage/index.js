const ErrorMessage = ({message, onError}) => {
    return (
        <div style={{display: onError ? 'block' : 'none'}}>
            <span>{message}</span>
        </div>
    )
}

export default ErrorMessage;
