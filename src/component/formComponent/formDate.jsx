import React from "react";
import DateInput from "../inputs/dateInput";

export default function DateInputsForm({handlerSubmit, handlerLowerBound, handlerUpperBound }) {

    return <>
        <DateInput onChangeHandler={handlerLowerBound}></DateInput>
        <span> To </span>
        <DateInput onChangeHandler={handlerUpperBound}></DateInput>
        <button type="submit" onClick={handlerSubmit}>Go!</button>
    </>
}
