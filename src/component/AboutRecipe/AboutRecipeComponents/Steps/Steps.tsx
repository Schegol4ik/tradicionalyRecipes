import React from 'react';
import {BiRestaurant} from "react-icons/bi";
import {AiOutlineClockCircle} from "react-icons/ai";
import {CookingTimeType, StepsType} from "../../../../types/Types";

type Props = {
    steps: Array<StepsType>
    cookingTime: CookingTimeType
}

const Steps = ({steps, cookingTime}: Props) => {
    return (
        <div className='item__steps'>
            <div className='steps__title'>
                <BiRestaurant color='#F35431' size='20px'/>
                <h3>Шаги</h3>
                <span><AiOutlineClockCircle color='#F35431'
                                            size='20px'/> {cookingTime.h}ч {cookingTime.m}мин</span>
            </div>
            <div className='steps__aboutSteps'>
                {steps.map(({photoStep, step, stepNumber}) => <div key={stepNumber} className='steps__step'>
                    <div className='steps__img'>
                        <span>{stepNumber}</span>
                        <img src={photoStep} alt=""/>
                    </div>
                    <div className='steps__description'>
                        <span>{step}</span>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Steps;