interface IUser {
    id:number,
    name: string,
    username:string,
    email: string
}

interface IComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}


interface IMeal{
    id: number,
    slug: string,
    title: string,
    image: string,
    summary: string,
    instructions: string,
    creator: string,
    creator_email: string
}
