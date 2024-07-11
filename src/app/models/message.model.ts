export interface Message {
    content: string;
    senderId: string | null;
    senderName: string | null;
    sentAt?: Date;// Optionnel, si vous souhaitez inclure la date d'envoi

}