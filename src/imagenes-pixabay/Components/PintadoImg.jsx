import {getApi} from '../helpers/consumoApi';
import {ImgItems} from '../Components/ImgItems';
import { useState,useEffect } from 'react';
import InputImg from './InputImg';

export const PintadoImg =({valor})=>{
 const[infoApi,setInfoApi]= useState([])
 useEffect(()=>{
    getApi(valor).then((newImages=> setInfoApi(newImages.hits)));
 },[valor]);


    return(
        <div>
            {
                infoApi.map((img)=>{
                    return <InputImg/>
                })
            }
        </div>

    )
}
