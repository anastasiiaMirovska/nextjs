import React from "react"
import {Metadata} from "next";
import {userServices} from "@/services/api.services";


export const generateMetadata = async({params}:{params:{id:string}}):Promise<Metadata> => {
    let user = await userServices.getUserById(params.id);
    return {title: `${user?.username}`}
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