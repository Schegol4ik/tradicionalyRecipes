import React, {useMemo, useState} from 'react';
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {RatingType} from "../../../../types/Types";

type Props = {
    findRatings: Array<RatingType>
    addRating: (e: number) => void
    rating: boolean
}

const ShareAndRating = ({findRatings, addRating, rating}: Props) => {

    const sumRating = useMemo(() => {
        if(findRatings.length !== 0){
            let number = findRatings.map(({numberOfRatings}) => numberOfRatings)
            return number.reduce((acc, item) => acc + item)
        } else return 0

    }, [findRatings])

    const ratingPerson = useMemo(() => {
        let findId = findRatings.find(item => item.id)
        if (findId) {
            if (localStorage.getItem(`${findId.id}`)) {
                let getPersonRating = localStorage.getItem(`${findId.id}`)
                return Number(getPersonRating)
            } else {
                return Math.round(sumRating / findRatings.length)
            }
        }
    }, [findRatings])

    if(findRatings.length !== 0){

        return (
            <div className='item__rating'>
                <div>
                    <h3>Поделиться</h3>
                </div>
                <div className='rating__stars'>
                    <Rating
                        emptySymbol={<AiOutlineStar color='gray' size='30px'/>}
                        fullSymbol={<AiFillStar color='#F35431' size='30px'/>}
                        readonly={rating}
                        initialRating={ratingPerson || 0}
                        onClick={(e: number) => addRating(e)}
                    />
                    <span>({findRatings.length} оценки, среднее {Math.round(sumRating / findRatings.length)} из 5)</span>
                </div>
            </div>
        );
    }else{
        return (
            <div className='item__rating'>
                <div>
                    <h3>Поделиться</h3>
                </div>
                <div className='rating__stars'>
                    <Rating
                        emptySymbol={<AiOutlineStar color='gray' size='30px'/>}
                        fullSymbol={<AiFillStar color='#F35431' size='30px'/>}
                        readonly={rating}
                        initialRating={0}
                        onClick={(e: number) => addRating(e)}
                    />
                    <span>Оцените блюдо первым!</span>
                </div>
            </div>
        )
    }






};

export default ShareAndRating;