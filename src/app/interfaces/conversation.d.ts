export interface IConversation {
    conversations_id?: number;
    messages?: {
        text:string
        time:string
    }[];
    source?: string;
    status?: string;
    meta?: {
        order?: any;
    };
}
