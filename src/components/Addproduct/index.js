import React, { useState } from 'react'
import { useForm } from "react-hook-form"

const Addproduct = ({ onAdd }) => {
    const { register, handleSubmit,  errors } = useForm();
    const onSubmit = data => onAdd(data);
    // const [inputValue, setInputValue] = useState({
    //     username: "",
    //     age: ""
    // })
    // const onHandleChange = (e) => {
    //     const name = e.target.name
    //     const value = e.target.value
    //     setInputValue({
    //         ...inputValue,
    //         [name]: value
    //     })
    // }
    // const onHandleSubmit = (e) => {
    //     e.preventDefault()
    //     if (inputValue) {
    //         onAdd(inputValue)
    //     }
    // }
    return (
        <div className="w-25 mx-auto">
            <form action="" onSubmit={handleSubmit(onSubmit)} >
                <br />
                <div className="form-group mb2">
                    <input type="text" name="username" ref={register({ required: true })} className="form-control" placeholder="tên sản phẩm" />
                    {errors.username && <span className="text-danger">bắt buộc điền ô này</span>}
                    <br/>
                </div>
                <div className="form-group mb2">
                   <input type="number" name="age" ref={register({ required: true })} className="form-control" placeholder="giá"/><br />
                    {errors.age && <span className="text-danger">bắt buộc điền ô này</span>}<br/>
                </div>
                <div className="form-group mb2">
                   <textarea name="desc"  cols="50" rows="5" ref={register} ></textarea>
                    
                </div>
                <button type="submit" className="btn btn-primary">Add-new</button>
            </form>
    
        </div>
    )
}

export default Addproduct
