import React, { useState, useEffect } from 'react';
import * as yup from "yup";
import './Signup.css';
import { FcGoogle } from 'react-icons/fc';
import { useHistory } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';


// configure schema 
const signupSchema = yup.object().shape({
    //  name: yup.string().required(),
    Email: yup.string().required(),
    CreatePassword: yup.string().min(8).required(),
    RepeatPassword: yup.string().min(8).required(),

})
const inErrs = {
    //  name: '',
    Email: '',
    CreatePassword: '',
    RepeatPassword: '',
}
export default function Signup() {
    //  const [name, setName] = useState("");
    //1-controlled component
    const [Email, setEmail] = useState("");
    const [CreatePassword, setPass] = useState("");
    const [RepeatPassword, setPass2] = useState("");
    const [errors, setErrors] = useState(inErrs);
    const [submitted, setSubmitted] = useState(false);
    const data = { /*name,*/ Email, CreatePassword, RepeatPassword };

    const validateForm = (data) => {
        signupSchema
            .validate(data, { abortEarly: false })
            // signupSchema.isValid(data) return true /false
            //abortEarly:false => return all error
            .then((obj) => {
                // console.log(valid)
                // if valid  you can use the api 
                /*  if (valid){
                      console.log("valid");
                  }
                  else {
                      console.log("else");
                  }*/
                setErrors(inErrs);
                //console.log(obj)
            }).catch((err) => {
                //  console.dir(err.inner)//inner connect with path and msg=> path :msg
                // console.log("err")
                const newErrors = err.inner.reduce((acc, curr) => {
                    //  console.log(curr)
                    acc[curr.path] = curr.message;
                    return acc;
                }, {})
                setErrors(newErrors);
            })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        validateForm(data);
    }

    const setObject = {
        // name: setName,
        Email: setEmail,
        CreatePassword: setPass,
        RepeatPassword: setPass2,
    };

    /*
        switch(e.target.name) {
  case name:
    setName();
    break;

  case Email:
  setEmail();
    break;

   case  CreatePassword:
       setPass();
    break;

     case  RepeatPassword:
       setPass2();
    break;

  default:
   console.log("sth wrong")
}
    */
    useEffect(() => {
        if (submitted) {
            validateForm(data);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [/*name,*/ Email, CreatePassword, RepeatPassword]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setObject[name](value);
        //ex:- setObject[Email]=>>setEmail(new value)so state will change with new value 
    }
    let history = useHistory();
    function handleClick() {
        history.push("/LoginPage");
    }
    return (
        <div className="direction">
            <div className="info">
                <div className="info-color">
                    <div>
                        <div className="ec-con">
                            <div className="ecl1" style={{ boxShadow: "11px 16px 0 0 #FFFFFF" }}></div>
                            <div className="ecl" style={{ boxShadow: "11px 16px 0 0 #FFFFFF" }}></div>
                        </div>
                        <div className="title" style={{ color: "#FFFFFF", fontSize: "15px" }}>Gamers</div>
                    </div>
                    <div className="info-desc">
                        <p className="qoute" style={{ color: "#00DAF7" }}></p>
                        <div> always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.
                            </div>
                    </div>
                    <div className="info-auth">Hideo Kojima</div>
                </div>
            </div>
            <div>
                <div className="back">
                    <IoIosArrowBack />
                    <a href="/" onClick={handleClick}>Back </a>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="line2">
                        <h1>Register Individual Account!</h1>
                        <p>For the purpose of gamers regulation, your details are required.</p>
                    </div>
                    {  /* <label htmlFor="name" className={`label${errors.name}&& error`}>
                        {//${errors.name}&& error ==> if there is an  error 
                        }
                    UserName:
                     <input type="text" value={name} onChange={handleChange} name="name" />
                        {errors && <div className="err">{errors.name}</div>}
                    </label>*/}
                    <label htmlFor="Email">
                        Email address*
                    </label>

                    <input type="email" placeholder="Enter email address" value={Email} onChange={handleChange} name="Email" />
                    {errors && <div className="err">{errors.Email}</div>}

                    <label htmlFor="CreatePassword">
                        Create Password*
                    </label>
                    <input type="password" placeholder="Password" value={CreatePassword} onChange={handleChange} name="CreatePassword" />
                    {errors && <div className="err">{errors.CreatePassword}</div>}
                    <label htmlFor="RepeatPassword">
                        Repeat Password*
                    </label>
                    <input type="password" placeholder="Repeat password" value={RepeatPassword} onChange={handleChange} name="RepeatPassword" />
                    {//or just use setPass2(e.target.value)
                    }
                    {errors && <div className="err">{errors.RepeatPassword}</div>}

                    <div className='con'>
                        <input type="checkbox" id="agree" name="agree" value="agree" />
                        <label className='checked' htmlFor="agree"> I agree to terms & conditions</label>
                    </div>
                    <input type="submit" value="Register Account" />
                    <div className="line"><p className="or">or</p></div>
                    <div className="ic"> <FcGoogle /></div>
                    <input type="button" value="login" />
                </form>
            </div>
        </div>
    )
}
