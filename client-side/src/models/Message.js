export default function MessageData(messageId, senderName, dateSending, title, encryptedFile) {
    this.MessageId = messageId;
    this.SenderName = senderName;
    this.DateSending = dateSending;
    this.Title = title;
    this.EncryptedFile = encryptedFile;
}