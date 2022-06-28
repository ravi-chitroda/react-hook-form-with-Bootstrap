import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import classNames from "classnames";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("errors", errors);

  const onSubmit = (data) => console.log("data", data);
  return (
    <div className="App">
      <div className="container py-3">
        <div className="card border-0 shadow w-75 p-3 mx-auto">
          <h3 className="text-center">SignUP form</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="fullname"> Full Name :</label>
              <input
                type="text"
                className={classNames("form-control", {
                  "is-invalid": errors.fullname,
                })}
                // id="fullname"
                placeholder="Enter Your Full Name"
                // ref={register}  //This was used in older version < v7
                {...register("fullname", {
                  required: "This field is Mandaotory",
                  minLength: {
                    value: 3,
                    message: "Please fill atleast 3 letters of Name",
                  },
                  maxLength: {
                    value: 12,
                    message: "Name should be less than 12 letters",
                  },
                })}
                name="fullname"
              />
              {errors.fullname && (
                <div className="invalid-feedback">
                  {errors.fullname.message}
                </div>
              )}
              {/* {errors.fullName?.type === "minLength" && (
                <div className="invalid-feedback">
                  Please fill atleast 3 letters of Name
                </div>
              )}
              {errors.fullName?.type === "maxLength" && (
                <div className="invalid-feedback">
                  Name should be less than 12 letters
                </div>
              )} */}
            </div>
            <div className="form-group">
              <label htmlFor="email" className="mt-2">
                E-mail Address :
              </label>
              <input
                type="text"
                className={classNames("form-control", {
                  "is-invalid": errors.email,
                })}
                id="email"
                placeholder="Enter Your E-mail Address"
                // ref={register}
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Please Enter Valid e-Mail address",
                  },
                })}
                name="email"
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="mt-2">
                Phone Number :
              </label>
              <input
                type="text"
                className={classNames("form-control", {
                  "is-invalid": errors.phone,
                })}
                id="phone"
                placeholder="Enter Your Phone Number"
                // ref={register}
                {...register("phone", {
                  required: "Phone Number is Required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Please Enter valid number with 10 digit only",
                  },
                })}
                name="phone"
              />
              {errors.phone && (
                <div className="invalid-feedback">{errors.phone.message}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password" className="mt-2">
                Password :
              </label>
              <input
                type="text"
                className={classNames("form-control", {
                  "is-invalid": errors.password,
                })}
                id="password"
                placeholder="Enter Your Password"
                // ref={register}
                {...register("password", {
                  required: "Please enter password",
                  pattern: {
                    value:
                      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                    message:
                      "Password with minimum 8 character Upper & Lower case with symbol",
                  },
                })}
                name="password"
              />
              {errors.password && (
                <div className="invalid feedback text-danger">
                  {errors.password.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="state" className="mt-2">
                Choose Your State :
              </label>
              <select
                className={classNames("form-control", {
                  "is-invalid": errors.state,
                })}
                id="state"
                // ref={register}
                {...register("state", { required: "Please Select your State" })}
                name="state"
              >
                <option value="">--- Select Your State ---</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Punjab">Punjab</option>
              </select>
              {errors.state && (
                <div className="invalid feedback text-danger">
                  {errors.state.message}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="gender" className="mr-7 mt-2">
                Choose Your Gender:
              </label>
              <div className="form-check form-check-inline mx-5">
                <input
                  className="form-check-input"
                  type="radio"
                  id="male"
                  value="male"
                  name="gender"
                  // ref={register}
                  {...register("gender", {
                    required: "Please Select your Gender",
                  })}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline mx-5">
                <input
                  className="form-check-input"
                  type="radio"
                  id="female"
                  value="female"
                  name="gender"
                  // ref={register}
                  {...register("gender", {
                    required: "Please Select your Gender",
                  })}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
              <div className="form-check form-check-inline mx-5">
                <input
                  className="form-check-input"
                  type="radio"
                  id="other"
                  value="other"
                  name="gender"
                  // ref={register}
                  {...register("gender", {
                    required: "Please Select your Gender",
                  })}
                />
                <label className="form-check-label" htmlFor="other">
                  Other
                </label>
              </div>
              {errors.gender && (
                <div className="form-text text-danger">
                  {errors.gender.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <div className="form-check form-check-inline mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="tnc"
                  // ref={register}
                  {...register("tnc", {
                    required: "Please accept Terms & Condition",
                  })}
                  name="tnc"
                />
                <label className="form-check-label " htmlFor="tnc">
                  I agree all terms & conditions
                </label>
                {errors.tnc && (
                  <div className="form-text text-danger">
                    {errors.tnc.message}
                  </div>
                )}
              </div>
            </div>
            <div className="form-group">
              <div className="input-group-date">
                <label htmlFor="fullname" className="mt-2">
                  Your Birthdate :
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="birthDate"
                  {...register("birthDate", {
                    required: "Please Select your Birthdate",
                  })}
                />
                {errors.birthDate && (
                  <div className="form-text text-danger">
                    {errors.birthDate.message}
                  </div>
                )}
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-primary mt-2 " type="submit">
                Create New Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
