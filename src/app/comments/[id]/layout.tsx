import React from "react"
import {Metadata} from "next";
import {commentServices} from "@/services/api.services";


export const generateMetadata = async ({params}:{params:{id:string}}): Promise<Metadata> => {
    let comment = await commentServices.getCommentById(params.id)
    return {title: comment.name}
};

type Props = {children: React.ReactNode};
const Layout = ({children}: Props) => {
    return   (
        <div>
            {children}
        </div>
    )
};

export default Layout;