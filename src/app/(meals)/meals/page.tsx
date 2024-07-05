import React from 'react';
import {getMeals} from "@/services/db/db";
import MealsFormComponent from "@/components/MealsFormComponent";

const MealsPage = async() => {

    let meals = await getMeals();
    return (
        <div>
            <MealsFormComponent/>
            <ul>
                {
                    meals.map((meal:IMeal)=>(<li key={meal.id}>{meal.id} {meal.creator} {meal.title}</li>))
                }
            </ul>

        </div>
    );
};

export default MealsPage;