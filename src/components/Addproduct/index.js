import React ,{useState} from 'react'


const Addproduct = ({onAdd}) => {
    const [value,setValue]=useState({
        username:"",
        age:""
    })
    const onHandleChange=(e)=>{
        setValue(e.target.value)
    }
    const onHandleSubmit=(e)=>{
        e.preventDefault()
        if(value){
            onAdd(value)
        }
    }
    return (
        <>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" name="username" defaultValue={value} onChange={onHandleChange}/>
                <input type="text" name="age" defaultValue={value} onChange={onHandleChange}/>
                <button type="submit">Add</button>
            </form>
            {value}
        </>
    )
}

export default Addproduct
