import React from 'react';
import {userServices} from "@/services/api.services";

type Params = {
    params:{
        id:string
    }
}

const UsersDetailsPage = async ({params}:Params) => {
    let user = await userServices.getUserById(params.id);
    return (
        <div>
            {user?.id} {user?.name} {user?.username} {user?.email}
        </div>
    );
};

export default UsersDetailsPage;



