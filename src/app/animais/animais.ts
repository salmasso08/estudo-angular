export interface Animal {
    id: number;
    postDate: Date;
    url: String;
    description: string;
    allowComments: boolean;
    likes: number;
    comments: number;
    userId: number;
}

export type Animais = Array<Animal>
