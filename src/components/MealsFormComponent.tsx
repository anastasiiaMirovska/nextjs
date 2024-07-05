import React from 'react';
import {addMeal} from "@/services/db/db";

const MealsFormComponent = () => {
    return (
        <div>
            <form action={addMeal}>
                <label>slug</label>
                <input type={"text"} name={"slug"}/><br/>
                <label>title</label>
                <input type={"text"} name={"title"}/><br/>
                <label>image</label>
                <input type={"text"} name={"image"}/><br/>
                <label>summary</label>
                <input type={"text"} name={"summary"}/><br/>
                <label>instructions</label>
                <input type={"text"} name={"instructions"}/><br/>
                <label>creator</label>
                <input type={"text"} name={"creator"}/><br/>
                <label>creator email</label>
                <input type={"text"} name={"creator_email"}/><br/>
                <button>Add meal</button>
            </form>
        </div>
    );
};

export default MealsFormComponent;
