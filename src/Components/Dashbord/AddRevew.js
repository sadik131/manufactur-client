import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddRevew = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const imgbb = "368c33814be9653fe3277b819a7b9bc8" 
    const url=`https://api.imgbb.com/1/upload?key=${imgbb}`
    const onSubmit = async (data) => {
        const img = data.url[0]
        const formData = new FormData();
        formData.append('image',img );

        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(res =>res.json())
        .then(result=>{
            if(result.success){
                const userData={
                    img:result.data.url,
                    name:data.name,
                    message:data.textarea,
                    review:data.review
                }
            fetch('https://lit-harbor-16430.herokuapp.com/revew',{
                method:"POST",
                 headers:{
                "content-type":"application/json",
                "authorization" : `Bearer ${localStorage.getItem("accessToken")}`
            },
            body:JSON.stringify(userData)
            })    
            .then(res =>res.json())
            .then(data =>{
                toast(`${data.message}`)
                reset()
            })
            }
        })

    }
    return (
        <div>
            <h1 className="text-3xl text-primary text-center">Welcome To Revew Page</h1>
            <div className='flex py-10'>
                <div className="card w-96 flex bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-center">Add Some Revew</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs mt-0">
                                <input
                                    {...register("name", { required: true })}
                                    type="text"
                                    placeholder="Enter Your Full Name"
                                    className="input input-bordered w-full max-w-xs mt-0" />
                                <label className="label">
                                    <span><small className='text-red-600'>{errors.name?.type === 'required' && "Name fild is required"}</small></span>
                                </label>
                            </div>
                            
                            <div className="form-control w-full max-w-xs">
                                <input
                                    {...register("textarea", { required: true })}
                                    type="textarea"
                                    placeholder="Give sort discription"
                                    className="input input-bordered w-full h-40 align-top max-w-xs" />
                                <label className="label">
                                    <span><small className='text-red-600'>{errors.textarea?.type === 'required' && "textarea fild is required"}</small></span>
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs mt-0">
                                <input
                                    {...register("review", { required: true }, { minLength: 4 })}
                                    type="number"
                                    placeholder="Enter 1-5 Review Number"
                                    className="input input-bordered w-full max-w-xs mt-0" />
                                <label className="label">
                                    <span><small className='text-red-600'>{errors.review?.type === 'required' && "review fild is required"}</small></span>
                                    <span><small className='text-red-600'>{errors.minLength?.type === 'minLength' && "Name fild is required"}</small></span>
                                </label>
                                
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <input
                                    {...register("url", { required: true })}
                                    type="file"
                                    placeholder="Img url"
                                    className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    <span><small className='text-red-600'>{errors.url?.type === 'required' && "url fild is required"}</small></span>
                                </label>
                            </div>
                            <input className='btn w-full mt-3' type="submit" value="Submit" />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRevew;