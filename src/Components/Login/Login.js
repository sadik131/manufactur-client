import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate , useLocation} from 'react-router-dom';
import auth from '../../firebase.init';
import UseToken from '../Home/home/UseToken';
import Loading from '../Shared/Loading';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password)
    }

    const [token] = UseToken(user || gUser)
    
    const location = useLocation()
    
    const from = location.state?.from?.pathname || "/";
    if (token) {
        navigate(from, { replace: true });
    }

    let ErrorMessage;
    if (error || gError) {
        ErrorMessage = <>{error?.message}</>
    }

    if (gLoading || loading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex items-center justify-center py-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-xl font-semibold text-center">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

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
                        <input className='btn w-full mt-3' type="submit" value="Login" />
                        <p><small className='cursor-pointer mb-5'>Forget Password</small></p>
                        <span><p>New to <Link className='text-primary' to='/singin'>Create New Account</Link></p></span>
                        <div className='divider'>or</div>
                        <button onClick={() => signInWithGoogle()} className='btn btn-outline w-full'>Contenu With Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;