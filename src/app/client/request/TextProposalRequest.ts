export class  TextProposalRequest {
    userId: string;
    storyId: string;
    index: number;
    text: string;

    constructor(userId: string, storyId: string, index: number, text: string ) {
            this.userId = userId;
            this.storyId = storyId;
            this.index = index;
            this.text = text;
    }
}