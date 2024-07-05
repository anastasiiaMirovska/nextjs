const base:string = "https://jsonplaceholder.typicode.com";

const urlBuilder = {
    userBaseUrl: "/users",
    commentBaseUrl: "/comments",
    allUsers: () => base + urlBuilder.userBaseUrl,
    singleUser: (id: string|number)=> base+urlBuilder.userBaseUrl + "/" + id,
    allComments: ()=> base + urlBuilder.commentBaseUrl,
    singleComment: (id: string|number)=> base + urlBuilder.commentBaseUrl + "/" + id
}

const userServices = {
    getAllUsers: async (): Promise<IUser[]> =>{
        let users =  await fetch(urlBuilder.allUsers()).then(value=> value.json());
        return users;
    },
    getUserById: async (id:string|number):Promise<IUser| null> =>{
        let user = await fetch(urlBuilder.singleUser(id)).then(value=> value.json());
        return user;
    }
}

const commentServices = {
    getAllComments: async():Promise<IComment[]>=>{
        let comments = await fetch(urlBuilder.allComments()).then(value=>value.json());
        return comments
    },
    getCommentById: async(id:string|number):Promise<IComment>=>{
        let comment = await fetch(urlBuilder.singleComment(id)).then(value=>value.json());
        return comment;
    }
}

export{
    userServices,
    commentServices
}

