import emailjs from "emailjs-com";
import Swal from "sweetalert2";
export const SendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_xbcgkop",
      "template_k14v8xh",
      e.target,
      "ZcC_6_f6GhZm1yVDb"
    )
    .then((result) => {
      if (result.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "ایمیل با موفقیت ثبت شد",
          text: "قهوه آراد مفتخر است که شما را عضو خبرنامه خود می کند . از لطف بی کران شما سپاسگزاریم !",
          showConfirmButton: false,
          timer: 5000,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "متاسفانه خطایی رخ داد !",
        });
      }
    });
};
