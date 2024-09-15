import React from "react";
import stroke_bars from "../../assets/SVGs/strokes-bars.svg";
import master_card from "../../assets/SVGs/master-card.svg";
import money_exchange from "../../assets/SVGs/money-exchange.svg";
import morgage_loan from "../../assets/SVGs/morgage-loan.svg";
import online_business from "../../assets/SVGs/online-business.svg";
import other_loans from "../../assets/SVGs/other-loans.svg";
import phone_card from "../../assets/SVGs/phone-card.svg";

const Services = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto text-center grid gap-[10px] pt-[20px] mt-[20px]">
        <div className="flex gap-[5px] text-[#015FF1] font-semibold justify-center items-center">
          <img src={stroke_bars} alt="stroke_bars" />
          <p className="text-[22px]">Best Services</p>
        </div>
        <h3 className="md:text-[48px] text-[25px] text-[#484c68] font-bold">
          Entirely Providing The Best{" "}
          <span className="text-[#015FF1]">Services</span>
        </h3>
        <p>
          We offer a wide Range of Services To Our Costomers these Helps to meet
          every Costomer’s Needs and Expectations.
        </p>
      </div>
      <div className="lg:w-[80%] w-[90%] mt-[50px] mx-[auto] grid md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-[35px] services-card">
        <div className="text-center grid h-[300px] content-center gap-[10px] cursor-pointer | shaow-custom transform-scale">
          <img className="justify-self-center	" src={phone_card} alt="phone_card" />
          <h4 className="text-[20px] font-bold text-[#0B1035BF] leading-[30px]">
            Interest Free Periods
          </h4>
          <p className="text-[12px] text-[#6D6D6D] leading-[18px]">
            We allow our customers to spread payments over time without
            incurring additional costs.
          </p>
        </div>
        <div className="grid h-[300px] content-center gap-[10px] text-center bg-[#015FF1] cursor-pointer | shaow-custom  transform-scale">
          <img className="justify-self-center	" src={morgage_loan} alt="morgage_loan" />
          <h4 className="text-[20px] text-white font-bold text-[#0B1035BF] leading-[30px]">
            Extended Payment Plans
          </h4>
          <p className="text-[12px] text-[#6D6D6D] text-white leading-[18px]">
            We extend payment plans that allow users to pay for purchases in
            installments over an extended period, offering greater affordability
            and budget flexibility.{" "}
          </p>
        </div>
        <div className="grid h-[300px] content-center gap-[10px] text-center cursor-pointer | transform-scale shaow-custom">
          <img className="justify-self-center	" src={money_exchange} alt="money_exchange" />
          <h4 className="text-[20px] font-bold text-[#0B1035BF] leading-[30px]">
            Customer Support and Assistance{" "}
          </h4>
          <p className="text-[12px] text-[#6D6D6D] leading-[18px]">
            Dedicated customer support and assistance to address any questions,
            concerns, or issues that customers may have regarding the Buy Now
            Pay Later Service.{" "}
          </p>
        </div>
        <div className="grid text-center h-[300px] content-center gap-[10px] cursor-pointer | transform-scale shaow-custom">
          <img className="justify-self-center	" src={master_card} alt="master_card" />
          <h4 className="text-[20px] font-bold text-[#0B1035BF] leading-[30px]">
            Enhanced Shopping Experience
          </h4>
          <p className="text-[12px] text-[#6D6D6D] leading-[18px]">
            We provide a seamless integration with the online retailers and also
            get to offer very convenient checkout options.{" "}
          </p>
        </div>
        <div className="grid h- text-center h-[300px] content-center gap-[10px] cursor-pointer | transform-scale shaow-custom">
          <img className="justify-self-center	" src={online_business} alt="online_business" />
          <h4 className="text-[20px] font-bold text-[#0B1035BF] leading-[30px]">
            Exclusive Offers and Discounts
          </h4>
          <p className="text-[12px] text-[#6D6D6D] leading-[18px]">
            We have offers, discounts and promotions available to our dedicated
            users who utilize our services.
          </p>
        </div>
        <div className="grid h-[300px] content-center gap-[10px] text-center cursor-pointer | transform-scale shaow-custom">
          <img className="justify-self-center	" src={other_loans} alt="other_loans" />
          <h4 className="text-[20px] font-bold text-[#0B1035BF] leading-[30px]">
            Low Or No Fees
          </h4>
          <p className="text-[12px] text-[#6D6D6D] leading-[18px]">
            We have Minimal Processing fees/waived interest charges under
            certain conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
