import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import UseToken from '../Home/home/UseToken';

const Singin = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, pError] = useUpdateProfile(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()

    const handelGoogle = () => {
        signInWithGoogle()
    }

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
    }
    
    const [token] = UseToken(user || gUser)
    
    if (token) {
        navigate('/')
    }

    if(loading || gLoading){
        return <Loading></Loading>
    }

    let ErrorMessage;
    if (error || gError || pError) {
        ErrorMessage = <>{error?.message}</>
    }

    return (
        <div className='flex items-center  justify-center py-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-xl font-semibold text-center">Signin</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs mt-0">
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                placeholder="Enter Your Name"
                                className="input input-bordered w-full max-w-xs mt-0" />
                            <label className="label">
                                <span><small className='text-red-600'>{errors.name?.type === 'required' && "Name fild is required"}</small></span>
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                placeholder="Enter Your Email"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span><small className='text-red-600'>{errors.email?.type === 'required' && "Email fild is required"}</small></span>
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <input
                                {...register("password", { required: true })}
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span><small className='text-red-600'>{errors.password?.type === 'required' && "Password fild is required"}</small></span>
                            </label>
                        </div>
                        <small className='text-red-500'>{ErrorMessage}</small>
                        <input className='btn w-full mt-3' type="submit" value="Sign in" />
                        <p><small className='cursor-pointer mb-5'>Forget Password</small></p>
                        <span><p>Already have an account <Link className='text-primary' to='/login'>login</Link></p></span>
                        <div className='divider'>or</div>
                        <button onClick={handelGoogle} className='btn btn-outline w-full'>Contenu With Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Singin;