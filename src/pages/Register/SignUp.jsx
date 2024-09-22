
import { useState } from "react";
import { Container } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { PiUsersFourFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getDataForm } from "../../Redux/slices/Register";

function SignUp() {
    const [inputValue , setInputValue] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
      };
    const isLogin = () => {
      dispatch(getDataForm(inputValue))
      navigate('/panel/dashboard');
    }
    const handleInput = (e) => {
      const {value} = e.target;
      setInputValue(value)
    }
    return ( 
        <div className="bg-image">
          <Container className='!m-auto px-3 justify-center flex signUpClass text-center'>
      <div className="wrapper signUpClass text-white w-[420px] bg-transparent border-[1px] border-solid border-gray-400   rounded-3xl !py-7 !px-10">
        <form action="" onSubmit={handleSubmit}>
          <h1 className='text-[36px] text-center'>ثبت نام</h1>
          <div className="input-box relative w-full h-[50px] !my-[30px]">
          <input id="FName" className='w-full h-full bg-transparent outline-none border-[2px] border-solid border-b-gray-200 rounded-[40px] placeholder:text-white text-[16px] text-white !py-[20px] !pe-[45px] !ps-[20px]' type="text" name="username" placeholder='نام' required/>
          <FaUserAlt size={'20px'} className='icon absolute left-5 top-[50%] translate-y-[-50%] text-[16px]'/>
          </div>
          <div className="input-box relative w-full h-[50px] !my-[30px]">
          <input id="LName" className='w-full h-full bg-transparent outline-none border-[2px] border-solid border-b-gray-200 rounded-[40px] placeholder:text-white text-[16px] text-white !py-[20px] !pe-[45px] !ps-[20px]' type="text" name="password" placeholder='نام خانوادگی' required/>
          <PiUsersFourFill size={'22px'} className='icon absolute left-5 top-[50%] translate-y-[-50%] text-[16px]'/>
          </div>
          <div className="input-box relative w-full h-[50px] !my-[30px]">
          <input onChange={handleInput} id="PhoneNumber" className='w-full h-full bg-transparent outline-none border-[2px] border-solid border-b-gray-200 rounded-[40px] placeholder:text-white text-[16px] text-white !py-[20px] !pe-[45px] !ps-[20px]' type="text" name="username" placeholder='شماره موبایل' required/>
          <FiSmartphone size={'20px'} className='icon absolute left-5 top-[50%] translate-y-[-50%] text-[16px]'/>
          </div>
          <button type='submit' onClick={isLogin} className='w-full h-[45px] bg-white border-none outline-none rounded-[40px] shadow-lg !cursor-pointer text-[16px] text-[#333]'>ثبت نام</button>
          <div className="register-link text-[14.5px] text-center mt-5 ">
            <p>حساب دارید ؟؟ <Link to="/login" className='text-white no-underline font-bold hover:underline'>حساب دارم</Link></p>
            {/* <p>صحفه اصلی</p> */}
          </div>
        </form>
      </div>
     </Container>
        </div>
     );
}

export default SignUp;