import React from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, reset },
  } = useForm();

  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] =
    React.useState(false);

  const postData = ({ name }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`${name} saved.`);
        resolve({ success: true });
      }, 100);
    });
  };

  const onSubmit = async (data) => {
    emailjs
      .send("service_eqp5lv8", "template_54iplxj", data, "zuXt0xHobBClGi0ZB")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    const result = await postData(data);
    setIsSuccessfullySubmitted(result.success);
  };

  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      {isSuccessfullySubmitted ? (
        <div className="fixed font-antique mt-20 text-center text-neutral-50 mx-5">
          <h2 className="text-5xl ">Thank you for your message!</h2>
          <p className="text-2xl mt-10">
            We'll get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <div className="w-5/6 ">
          <div className="font-antique mt-14 flex justify-center">
            <div className="w-full flex flex-col text-neutral-50 justify-center items-center ">
              <div className="lg:mr-10 lg:text-center">
                <h1 className="text-4xl text-center mb-10">CONTACT</h1>
                <div className="md:w-5/6 lg:w-full xl:w-5/6 mx-auto">
                  <h1 className="text-2xl text-center md:mb-5">
                    Are You Experiencing the Unexplained?
                  </h1>
                  <p className="text-xl mt-5">
                    Do you believe you might be haunted? Are you seeking someone
                    from our team to discuss if an investigation is necessary?
                    We're here for you!
                  </p>
                  <p className="text-xl my-5">
                    Use the form to get in touch with us right away. Your
                    concerns are essential to us, and we'll respond promptly to
                    provide the assistance you need.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-3/4">
                <div
                  className="w-full text-black shadow-lg rounded-md bg-neutral-50 lg:mr-10 p-2 md:p-8 flex flex-col"
                  style={{ height: "450px" }}
                >
                  <h2 className="text-center font-medium my-4 text-4xl">
                    CONTACT US
                  </h2>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-1 flex-col justify-evenly "
                    ref={reset}
                  >
                    <label htmlFor="from_name">Name*</label>
                    <input
                      className="border-2 outline-none p-2 rounded-md"
                      placeholder="John Smith"
                      type="text"
                      name="from_name"
                      disabled={isSubmitting}
                      {...register("from_name", {
                        required: "Name is required",
                      })}
                    />
                    {errors.from_name && (
                      <span className="text-sm text-red-700">
                        {errors.from_name.message}
                      </span>
                    )}
                    <label className="xl:mt-5" htmlFor="from_email">
                      Email*
                    </label>
                    <input
                      className="border-2 outline-none p-2 rounded-md"
                      placeholder="abc123@gmail.com"
                      type="email"
                      name="from_email"
                      disabled={isSubmitting}
                      {...register("from_email", {
                        required: "Please enter your email",
                      })}
                    />
                    {errors.from_email && (
                      <span className="text-sm text-red-700">
                        {errors.from_email.message}
                      </span>
                    )}
                    <label className="xl:mt-5" htmlFor="message">
                      How can we help you?
                    </label>
                    <textarea
                      className="border-2 outline-none p-2 rounded-md"
                      name="message"
                      placeholder="Message..."
                      disabled={isSubmitting}
                      {...register("message", {
                        required: "Please enter a message",
                      })}
                    />
                    {errors.message && (
                      <span className="text-sm text-red-700">
                        {errors.message.message}
                      </span>
                    )}
                    <button
                      type="submit"
                      className="mt-4 flex justify-center p-2 rounded-md w-1/2 self-center bg-gray-900  text-white hover:bg-gray-800"
                    >
                      SEND
                    </button>
                  </form>
                </div>
                <p className="text-neutral-50 text-center text-xl mt-5">
                  P.O. Box 1115 Pottsville, PA. 17901 <br /> Jaclyn LáRen -
                  (814) 952-0840
                  <br />
                  Johnny - (814) 249-1982 <br />
                  ForsakenSoulsPRG@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Contact;
