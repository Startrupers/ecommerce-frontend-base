"use client";

import CheckoutWizard from "@/components/CheckoutWizard/Checkoutwizard";
import { RootState } from "@/store";
import { saveShippingAddress } from "@/store/slices";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import "./page.css";

export default function ShippingAdress() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();
  const router = useRouter();
  const dispatch = useDispatch();
  const { shippingAddress } = useSelector((state: RootState) => state.cart);

  const submitHandler = ({
    fullName,
    address,
    city,
    postalCode,
    country,
  }: {
    fullName: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  }) => {
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );
    router.push("/payment");
  };

  return (
    <div>
      <CheckoutWizard activeStep={1} />
      <form className="form" onSubmit={handleSubmit(submitHandler as any)}>
        <h1 className="header">Shipping Address</h1>
        <div className="label">
          <label htmlFor="fullName">Full Name</label>
          <input
            className="blanck"
            type="text"
            id="fullName"
            {...register("fullName", { required: "Full Name is required" })}
          />
          {errors.fullName && <>{errors.fullName.message}</>} 
        </div>
        <div className="label">
          <label htmlFor="address">Address</label>
          <input
            className="blanck"
            type="text"
            id="address"
            {...register("address", {
              required: "Address is required",
              minLength: {
                value: 3,
                message: "Address must be at least 3 characters",
              },
            })}
          />
          {errors.address && <>{errors.address.message}</>}
        </div>
        <div className="label">
          <label htmlFor="city">City</label>
          <input
            className="blanck"
            type="text"
            id="city"
            {...register("city", { required: "City is required" })}
          />
          {errors.city && <>{errors.city.message}</>}
        </div>
        <div className="label">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            className="blanck"
            type="text"
            id="postalCode"
            {...register("postalCode", { required: "Postal Code is required" })}
          />
          {errors.postalCode && <>{errors.postalCode.message}</>}
        </div>
        <div className="label">
          <label htmlFor="country">Country</label>
          <input
            className="blanck"
            type="text"
            id="country"
            {...register("country", { required: "Country is required" })}
          />
          {errors.country && <>{errors.country.message}</>}
        </div>
        <div className="container-button">
          <button className="button" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
