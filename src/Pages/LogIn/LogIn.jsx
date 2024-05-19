import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogInImage from "../../assets/others/authentication2.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../SocialLogIn/SocialLogin";

const LogIn = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const [captchaValue, setCaptchaValue] = useState("");
    const { signIn } = useContext(AuthContext);



    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const { signInUser } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // navigation systems
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/";

    const onSubmit = (data) => {
        const { email, password } = data;


        signInUser(email, password)
            .then(result => {
                if (result.user) {
                    navigate(from);
                }
            });
    };

    const handleCaptchaChange = (e) => {
        setCaptchaValue(e.target.value);
    };

    const handleValidateCaptcha = () => {
        console.log(captchaValue);
        if (validateCaptcha(captchaValue)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row border-gray-400 p-1 shadow-md lg:p-14">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img src={LogInImage} alt="" />

                        <Link to={'/'}>
                            <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4 flex mx-auto hover:bg-orange-400 hover:border-orange-700">
                                Home
                            </button>
                        </Link>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
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
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered"
                                    {...register("password", { required: true })}
                                />
                                {errors.password && (
                                    <span className="text-red-500">This field is required</span>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input
                                    ref={captchaRef}
                                    type="text"
                                    name="captcha"
                                    placeholder="type the captcha above"
                                    className="input input-bordered"
                                    onChange={handleCaptchaChange}
                                />
                                <button type="button" onClick={handleValidateCaptcha} className="btn btn-outline btn-sm mt-2">Validate</button>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-outline bg-[#D1A054B3] hover:bg-orange-400 border-0 border-b-4 border-orange-400 hover:border-orange-700 mt-4" disabled={disabled} type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="flex mx-auto mb-11 text-orange-400"><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
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

export default LogIn;
