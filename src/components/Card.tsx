import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import Rating from '@mui/material/Rating';
import React, {useState} from 'react';


export default function Card ( {  hospitalName , imgSrc ,onRating } : {hospitalName:string, imgSrc:string,onRating?:Function }) {

    return (
        <InteractiveCard constentName ={hospitalName}> 
            <div className='w-full h-[70%] relative rounded-lg'> 
                <Image src={imgSrc}
                    alt='Product Picture'
                    fill={true}
                    className='object-cover rounded-lg'
                    />
                </div>
                <div className='w-full h-[15%] p-[10px]'>{hospitalName}</div>  
                {
                    onRating?<Rating id={hospitalName+" Rating"} name={hospitalName+" Rating"} data-testid={hospitalName+" Rating"} defaultValue={5}
                    onClick={ (e) => {  e.stopPropagation(); }}
                    onChange={ (e, value) => { onRating(hospitalName, value)} } 
                    />:''
                }
            
        </InteractiveCard>
    );
}