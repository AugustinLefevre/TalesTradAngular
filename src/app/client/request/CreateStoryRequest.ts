export class  CreateStoryRequest {
    title: string;
    userId: string | null;
    mainIdea: string | null;

    constructor(title: string, userId: string | null, mainIdea: string | null) {
            this.title = title;
            this.userId = userId;
            this.mainIdea = mainIdea;
    }
}