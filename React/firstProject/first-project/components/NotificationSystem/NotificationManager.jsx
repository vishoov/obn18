import Message from "./Message"

const NotificationManager =()=>{
    return (
        <div>
            {/* Error message */}
            <Message type="error" message="This is an Error" />

            {/* Success Message */}
            <Message type="success" message="This is a Success" />

        </div>
    )
}

export default NotificationManager