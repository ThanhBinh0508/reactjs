import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IAuth } from "../interface/auth";
import { useSigninMutation } from "../services/auth";

const Signin = () => {
    const navigate = useNavigate()
    const [signin] = useSigninMutation();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IAuth>();
    
    const onSubmit: SubmitHandler<IAuth> = (data) => {
        signin(data)
            .unwrap()
            .then((response) => {
                localStorage.setItem("user", response);
            });
    };
    return (
        <div className="mx-auto mt-5 " style={{ width: '600px' }}>
            <div className=" mx-auto items-center">
                <div className="w-[800px] bg-light rounded-2 p-8 row">
                    <form className="w-[400px] col-6" id="signin" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" {...register("email")} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" {...register("password")} />
                        </div>
                        <button className="text-center text-white w-[410px] h-[48px] rounded-md mt-1 btn btn-primary">
                            Đăng Nhập
                        </button>
                        <p className="text-center my-4 font-normal">Hoặc đăng nhập bằng</p>
                        <div className="mx-5">
                            <a href="#"><img src="./public/images/face.png" alt="" className="w-[80%]" /></a>
                            <a href="#"><img src="./public/images/gg.png" alt="" className="w-[80%]" /></a>
                        </div>
                        <p className="text-center">Bạn chưa có tài khoản? <a href="/signup" className="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Đăng Ký tài khoản mới </span></a></p>
                    </form>
                    <div className="col-6 mt-5">
                        <a href="/" ><img src="./public/images/logo-maytinh.jpg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;