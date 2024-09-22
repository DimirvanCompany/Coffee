import { Container } from 'react-bootstrap';
import './Login.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDataForm } from '../../Redux/slices/Register';
import { useNavigate } from 'react-router-dom';
import { FiSmartphone } from 'react-icons/fi';
import { Link } from 'react-router-dom';
function Login(){
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [phoneNumber , setPhoneNumber] = useState('')

  const isLogin = () => {
    // فرض کنیم phoneNumber از state گرفته شده است
    if (phoneNumber && phoneNumber.trim() !== '') { 
      // اگر شماره موبایل وارد شده باشد
      dispatch(getDataForm(phoneNumber)); // ارسال اطلاعات به action مربوطه
      navigate('/sms'); // هدایت به صفحه SMS
    } else {
      // در صورت خالی بودن شماره موبایل، نمایش پیام هشدار
      alert('لطفا شماره موبایل را وارد کنید');
    }
  };


const handleInput = (e) => {
    const { value } = e.target;
    setPhoneNumber(value)
}

const handleSubmit = (e) => {
  e.preventDefault();
};


    return ( 
        <div className='bg-image h-[100vh] flex'>
      {/* login */}
     <Container className='!m-auto px-3 flex justify-center loginClass'>
      <div className="wrapper text-white w-[420px] bg-transparent border-[1px] border-solid border-gray-400   rounded-3xl !py-7 !px-10">
        <form action="" onSubmit={handleSubmit}>
          <h1 className='text-[36px] text-center'>ورود</h1>
          <div className="input-box relative w-full h-[50px] !my-[30px]">
          <input onChange={handleInput} className='w-full h-full bg-transparent outline-none border-[2px] border-solid border-b-gray-200 rounded-[40px] placeholder:text-white text-[16px] text-white !py-[20px] !pe-[45px] !ps-[20px]' type="text" name="username" placeholder='شماره موبایل' required/>
          <FiSmartphone className='icon absolute left-5 top-[50%] translate-y-[-50%] text-[16px]'/>
          </div>
          <button onClick={isLogin} type='submit' className='w-full h-[45px] bg-white border-none outline-none rounded-[40px] shadow-lg cursor-pointer text-[16px] text-[#333]'>ورود</button>
          <div className="register-link text-[14.5px] text-center mt-5 ">
            <p>ثبت نام نکرده اید ؟؟ <Link to="/signUp"className='text-white no-underline font-bold hover:underline'>ثبت نام کنید</Link></p>
          </div>
        </form>
      </div>
     </Container>
    </div>
     );
}

export default Login;