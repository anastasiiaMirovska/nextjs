import React from 'react';
import {userServices} from "@/services/api.services";
import UserComponent from "@/components/UserComponent";

const UsersPage = async() => {

    let allUsers = await userServices.getAllUsers();

    return (
        <div>
            <ul>
                {
                    allUsers.map((user:IUser)=>(<li key={user.id}> <UserComponent user={user}/></li>))
                }
            </ul>
        </div>
    );
};

export default UsersPage;