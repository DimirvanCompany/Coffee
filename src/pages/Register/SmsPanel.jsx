import { Container } from 'react-bootstrap';
import './SmsPanel.css'
import { useState } from 'react';
import { MdSms } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
function SmsPanel() {

  const navigate = useNavigate()

    const numberSms = '123';
    const [sms , setSms] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault();
      };
      const handleInput = (e) => {
        setSms(e.target.value);
      }
    const isLogin = () => {
        if(sms === numberSms){
            toast.success('ورود با موفقیت انجام شد' , {
              duration: 3000,
            })
            navigate('/panel/dashboard')
        }else{
          const ErrorValue = document.getElementById('ErrorValue')
            toast.error('کد وارد شده اشتباه است',{
              duration: 3000,
            })
            ErrorValue.classList.remove('bg-transparent')
            ErrorValue.classList.add('!bg-red-400')
            console.log(ErrorValue);
        }
        setSms(0)
    }
    return ( 
       <>
        <Toaster position='top'  id = 'toastId' toastOptions='3000'/>  
        <div className='bg-image'>
            <Container className='!m-auto px-3 flex justify-center loginClass'>
        <div className="wrapper text-white w-[420px] bg-transparent border-[1px] border-solid border-gray-400   rounded-3xl !py-7 !px-10">
          <form action="" onSubmit={handleSubmit}>
            <h1 className=' text-center'>کد تایید را وارد کنید</h1>
            <div className="input-box relative w-full h-[50px] !my-[30px]">
            <input onChange={handleInput} id='ErrorValue' className='w-full h-full bg-transparent outline-none border-[2px] border-solid border-b-gray-200 rounded-[40px] placeholder:text-white text-[16px] text-white !py-[20px] !pe-[45px] !ps-[20px]' type="text" name="username" placeholder='کد تایید' required/>
            <MdSms size='20px' className='icon absolute left-5 top-[50%] translate-y-[-50%] text-[16px]'/>
            </div>
            <button onClick={isLogin} type='submit' className='w-full h-[45px] bg-white border-none outline-none rounded-[40px] shadow-lg cursor-pointer text-[16px] text-[#333]'>ورود</button>
          </form>
        </div>
       </Container>
        </div>
       </>
     );
}

export default SmsPanel;