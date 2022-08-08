import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit , reset} = useForm();
    const imgbbScritKey='368c33814be9653fe3277b819a7b9bc8'

    const onSubmit = async (data) => {
        const img = data.url[0]
        const formData = new FormData();

        const url=`https://api.imgbb.com/1/upload?key=${imgbbScritKey}`
        formData.append('image', img);
        fetch(url,{
            method:"POST",
            body:formData
        })
        .then(res =>res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url 
                const product = {
                    img:img,
                    name:data.name,
                    discription:data.textarea,
                    price:data.number
                }
                console.log(product);
                fetch('https://lit-harbor-16430.herokuapp.com/tool',{
                    method:'POST',
                    headers:{
                        'content-type':"application/json",
                        "authorization" : `Bearer ${localStorage.getItem("accessToken")}`
                    },
                    body:JSON.stringify(product)
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
        <div className='flex py-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-xl font-semibold text-center">Add Product</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs mt-0">
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                placeholder="Product name"
                                className="input input-bordered w-full max-w-xs mt-0" />
                            <label className="label">
                                <span><small className='text-red-600'>{errors.name?.type === 'required' && "Product name fild is required"}</small></span>
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

                        <div className="form-control w-full max-w-xs">
                            <input
                                {...register("number", { required: true })}
                                type="number"
                                placeholder="Enter Product Price"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span><small className='text-red-600'>{errors.number?.type === 'required' && "Price fild is required"}</small></span>
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <input
                                {...register("url", { required: true })}
                                type="file"
                                placeholder="Img url"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span><small className='text-red-600'>{errors.password?.type === 'required' && "Password fild is required"}</small></span>
                            </label>
                        </div>
                        <input className='btn w-full mt-3' type="submit" value="Submit" />
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;