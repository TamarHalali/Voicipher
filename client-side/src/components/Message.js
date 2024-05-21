import "./style.css"
export default function Message({messageData}) {
    return (
        <div className="messageStyle">
            <h3>
                Sent from:  {messageData.SenderName}
            </h3>
            <h3>
                Date sending: {messageData.DateSending}
            </h3>
            <h3>
                Title: {messageData.Title}
            </h3>
            <h3>
                File:
                
            </h3>
        </div>
    )
}

