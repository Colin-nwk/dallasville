// import { useRef, FormEvent } from "react";
// import emailjs from "emailjs-com";

// export const ContactUs: React.FC = () => {
//   const form = useRef<HTMLFormElement>(null);

//   const sendEmail = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (form.current) {
//       emailjs
//         .sendForm(
//           "YOUR_SERVICE_ID",
//           "YOUR_TEMPLATE_ID",
//           form.current,
//           "YOUR_USER_ID"
//         )
//         .then(
//           (result) => {
//             console.log(result.text);
//           },
//           (error) => {
//             console.log(error.text);
//           }
//         );
//     }
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        //   form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
