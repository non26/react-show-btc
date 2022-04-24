import React from 'react'

export default function DateInput({onChangeHandler}){

    return(
        <>
        <input type="date" onChange={(e)=> onChangeHandler(e)}/>
        </>
    )
}