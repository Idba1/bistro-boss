import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import SignUpImage from "../../assets/others/authentication2.png"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../SocialLogIn/SocialLogin";

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    // const Successfully = () => toast('Register Successful!');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // navigation systems
    const navigate = useNavigate();
    const from = "/";

    const validatePassword = (password) => {
        if (password.length < 6) {
            toast.error('Password must contain at least 6 character');
            return;

        }
        if (!/[A-Z]/.test(password)) {
            toast.error('Password must contain at least one uppercase letter');
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error('Password must contain at least one lowercase letter');
            return;
        }
        return true;
    };

    const onSubmit = (data) => {
        const { email, password } = data;


        const passwordValidation = validatePassword(password);
        if (passwordValidation !== true) {
            console.log(passwordValidation);
            return;
        }

        createUser(email, password)
            .then((result) => {
                navigate(from);
                const createdAt = result.user?.metadata?.creationTime;
                const user = { email, createdAt: createdAt };
                fetch('http://localhost:5000/', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Your Account Created Successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                        }
                    })
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse p-1 border-gray-400 shadow-md lg:p-14">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img src={SignUpImage} alt="" />

                        <Link to={'/'}>
                            <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4 flex mx-auto hover:bg-orange-400 hover:border-orange-700">
                                Home
                            </button>
                        </Link>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body grid md:grid-cols-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input type="name" name="name" placeholder="name" className="input input-bordered"
                                    {...register("FullName", { required: true })} />
                                {errors.FullName && (
                                    <span className="text-red-500">This field is required</span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered"
                                    {...register("email", { required: true })} />
                                {errors.email && (
                                    <span className="text-red-500">This field is required</span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photo-url</span>
                                </label>
                                <input type="photo_url" name="photo_url" placeholder="photo_url" className="input input-bordered"
                                    {...register("photo_url", { required: true })} />
                                {errors.photo_url && (
                                    <span className="text-red-500">This field is required</span>
                                )}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-sky-950 dark:text-sky-950">Password</label>
                                <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="block w-full px-5 py-3 mt-2 text-sky-950 placeholder-gray-950 bg-white border border-gray-950 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-sky-300 dark:border-gray-700 focus:border-blue-950 dark:focus:border-blue-950 focus:ring-blue-950 focus:outline-none focus:ring focus:ring-opacity-40"  {...register("password", { required: true })}
                                />
                                <span className="absolute top-96 right-24" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                                {errors.password && (
                                    <span className="text-red-500">This field is required</span>
                                )}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-outline bg-[#D1A054B3] hover:bg-orange-400 border-0 border-b-4 border-orange-400 hover:border-orange-700 mt-4" type="submit" value="SignUp" />
                            </div>
                        </form>
                        <p className="flex mx-auto  text-orange-400"><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
                        <div >
                            <p className="flex mx-autotext-orange-400"><small>Continue with social media</small></p>
                            <div className="card-body grid md:grid-cols-2">
                                <SocialLogin></SocialLogin>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;