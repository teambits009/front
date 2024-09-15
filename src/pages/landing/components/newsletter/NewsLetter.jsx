import React, { useState } from "react";
import { subscribeToNewsletter } from "../../../../Api/api";
import { message } from "antd";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    try {
      // Call your subscribeToNewsletter function with the email
      await subscribeToNewsletter({ email });
      message.success('Successfully subscribed to the newsletter!');
      setEmail(''); // Reset the email input field
    } catch (error) {
      console.error('Subscription failed:', error);
      if (error.response.data.email) {
        message.error(error.response.data.email)
      }else{
        message.error('Failed to subscribe. Please try again later.');
      }
    }
  };

  return (
    <div className="relative my-[100px]">
      <div className="newsletter">
        <div className="newsletter-content">
          <h3 className="md:text-[46px] text-[30px] font-bold">
            Sign Up For Our Newsletter
          </h3>
          <div className="flex gap-[10px] justify-center">
            <input
              className="w-[230px] focus:outline-none border bg-transparent h-[40px] rounded text-center placeholder-white"
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="text-black bg-white w-[130px] rounded h-[40px] cursor-pointer"
              type="submit"
              value="Submit"
              onClick={handleSubscribe}
            />
          </div>
        </div>
      </div>
      <div className="w-[64%] h-[70px] flex left-[50%] translate-x-[-50%] justify-between shadow-custom px-[20px] py-[15px] absolute bg-white bottom-[-38px]"></div>
    </div>
  );
};

export default NewsLetter;
