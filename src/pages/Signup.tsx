import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hook";
import { IAuth } from "../interface/auth";
import { useSignupMutation } from "../services/auth";
// import { signupApi } from "../slices/auth";

const Signup = () => {
    const navigate = useNavigate()
    const [signup, { isLoading }] = useSignupMutation();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IAuth>()

    const onSubmit: SubmitHandler<IAuth> = (data) => {
        signup(data)
        try {
            navigate("/signin")
        } catch (error) {

        }
    }
    return (
        <div>
            <div className="mx-auto mt-5 " style={{ width: '600px' }}>
                <div className=" mx-auto items-center">
                    <div className="w-[800px] bg-light rounded-2 p-8 row">
                        <form className="w-[400px] col-6" id="signin" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3" >
                                <label className="form-label">User Name</label>
                                <input type="text" className="form-control" {...register("username", { required: true })} />
                                {errors.username?.type === "required" && <p className='text-danger'>Please input your username</p>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control" {...register("email",
                                    {
                                        required: true,
                                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                    })} />
                                {errors.email?.type === "required" && <p className='text-danger'>Please input your email</p>}
                                {errors.email?.type === "pattern" && <p className='text-danger'>Invalid email address</p>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" {...register("password", { required: true })} />
                                {errors.password?.type === "required" && <p className='text-danger'>Please input your password</p>}
                            </div>
                            <button className="text-center text-white w-[410px] h-[48px] rounded-md mt-1 btn btn-primary">
                                Đăng Ký
                            </button>

                        </form>
                        <div className="col-6 mt-5">
                            <a href="/" ><img src="./public/images/logo-maytinh.jpg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Signup;