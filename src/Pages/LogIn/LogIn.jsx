import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import LogInImage from "../../assets/others/authentication2.png"

const LogIn = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row border-gray-400 shadow-md p-14">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img src={LogInImage} alt="" />
                        
                        <Link to={'/'}>
                            <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4 flex mx-auto hover:bg-orange-400 hover:border-orange-700">
                                Home
                            </button>
                        </Link>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    {/* <LoadCanvasTemplate /> */}
                                </label>
                                <input type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-outline bg-[#D1A054B3] hover:bg-orange-400 border-0 border-b-4 border-orange-400 hover:border-orange-700 mt-4" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="flex mx-auto mb-11 text-orange-400"><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;