import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { toast, Toaster } from "react-hot-toast";

import Button from "../button/Button";

import "../form-input/formInput.css";
import "./shippingDetails.css";

function ShippingDetails(props) {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (localStorage.getItem("shippingData")) {
      localStorage.removeItem("shippingData");
    }

    localStorage.setItem("shippingData", JSON.stringify(data));
    props.setEnableOnlinePayment(true);
  };

  const validateCountry = (country) => {
    if (country === "Choose Country") {
      return "Country is required";
    }
  };

  const validateCity = (city) => {
    if (city === "Choose City") {
      return "City is required";
    }
  };

  const validateRegion = (region) => {
    if (region === "Choose Region") {
      return "Region is required";
    }
  };

  useEffect(() => {
    const shippingData = localStorage.getItem("shippingData");
    if (shippingData) {
      const parsedShippingData = JSON.parse(shippingData);

      setValue("firstName", parsedShippingData.firstName);
      setValue("lastName", parsedShippingData.lastName);
      setValue("phoneNumber", parsedShippingData.phoneNumber);
      setValue("country", parsedShippingData.country);
      setValue("city", parsedShippingData.city);
      setValue("region", parsedShippingData.region);
      setValue("streetName", parsedShippingData.streetName);
      setValue("buildingNo", parsedShippingData.buildingNo);
      setValue("appartmentNo", parsedShippingData.appartmentNo);
      setValue("landMark", parsedShippingData.landMark);
    }
  }, []);

  const handlePayOnDelivery = () => {
    const formValues = getValues();
    let hasErrors = false;
    // console.log(formValues);

    if (formValues.firstName === "") {
      setError("firstName", {
        type: "manual",
        message: "First Name is required",
      });
      hasErrors = true;
    }
    if (formValues.lastName === "") {
      setError("lastName", {
        type: "manual",
        message: "Last Name is required",
      });
      hasErrors = true;
    }
    if (formValues.phoneNumber === "") {
      setError("phoneNumber", {
        type: "manual",
        message: "Phone Number is required",
      });
      hasErrors = true;
    }
    if (formValues.streetName === "") {
      setError("streetName", {
        type: "manual",
        message: "street is required",
      });
      hasErrors = true;
    }
    if (formValues.buildingNo === "") {
      setError("buildingNo", {
        type: "manual",
        message: "Building Number is required",
      });
      hasErrors = true;
    }
    if (formValues.appartmentNo === "") {
      setError("appartmentNo", {
        type: "manual",
        message: "Appartment Number is required",
      });
      hasErrors = true;
    }
    if (formValues.country === "Choose Country") {
      setError("country", {
        type: "manual",
        message: "Country is required",
      });
      hasErrors = true;
    }
    if (formValues.city === "Choose City") {
      setError("city", {
        type: "manual",
        message: "City is required",
      });
      hasErrors = true;
    }
    if (formValues.region === "Choose Region") {
      setError("region", {
        type: "manual",
        message: "Region is required",
      });
      hasErrors = true;
    }

    if (!hasErrors) {
      if (localStorage.getItem("shippingData")) {
        localStorage.removeItem("shippingData");
      }

      localStorage.setItem("shippingData", JSON.stringify(formValues));
      props.setEnableOnlinePayment(false);
      toast.success("Order is Confirmed");
    }
  };

  return (
    <div>
      <Toaster />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-grid">
          <div className="group" style={{ marginBlock: "25px" }}>
            <label className="form-input-label">First Name</label>
            <input
              className="form-input"
              {...register("firstName", { required: "First Name is required" })}
            />
            <span className="err-message">
              {errors.firstName && errors.firstName.message}
            </span>
          </div>

          <div className="form-grid">
            <div className="group" style={{ marginBlock: "25px" }}>
              <label className="form-input-label">Last Name</label>
              <input
                className="form-input"
                {...register("lastName", { required: "Last Name is required" })}
              />
              <span className="err-message">
                {errors.lastName && errors.lastName.message}
              </span>
            </div>
          </div>
        </div>

        <div className="group" style={{ marginBlock: "25px" }}>
          <label className="form-input-label">Phone Number</label>
          <input
            className="form-input"
            {...register("phoneNumber", {
              required: "Phone Number is required",
            })}
          />
          <span className="err-message">
            {errors.phoneNumber && errors.phoneNumber.message}
          </span>
        </div>

        <div className="form-grid">
          <div className="group" style={{ marginBlock: "25px" }}>
            <label className="form-input-label">Country</label>
            <div style={{ display: "block" }}>
              <select
                className="form-input"
                style={{ width: "210px" }}
                {...register("country", { validate: validateCountry })}
              >
                <option hidden>Choose Country</option>
                <option value="egypt">Egypt</option>
              </select>
              <span className="err-message">
                {errors.country && errors.country.message}
              </span>
            </div>
          </div>

          <div className="group" style={{ marginBlock: "25px" }}>
            <label className="form-input-label">City</label>
            <select
              className="form-input"
              style={{ width: "210px" }}
              {...register("city", { validate: validateCity })}
            >
              <option hidden>Choose City</option>
              <option value="cairo">Cairo</option>
            </select>
            <span className="err-message">
              {errors.city && errors.city.message}
            </span>
          </div>
        </div>

        <div className="form-grid">
          <div className="group" style={{ marginBlock: "25px" }}>
            <label className="form-input-label">Region</label>
            <select
              className="form-input"
              style={{ width: "210px" }}
              {...register("region", { validate: validateRegion })}
            >
              <option hidden>Choose Region</option>
              <option value="zamalek">Zamalek</option>
            </select>
            <span className="err-message">
              {errors.region && errors.region.message}
            </span>
          </div>

          <div className="group" style={{ marginBlock: "25px" }}>
            <label className="form-input-label">Street Name</label>
            <input
              className="form-input"
              {...register("streetName", { required: "Street is required" })}
            />
            <span className="err-message">
              {errors.streetName && errors.streetName.message}
            </span>
          </div>
        </div>

        <div className="form-grid">
          <div className="group" style={{ marginBlock: "25px" }}>
            <label className="form-input-label">Building No</label>
            <input
              className="form-input"
              {...register("buildingNo", {
                required: "Building No is required",
              })}
            />
            <span className="err-message">
              {errors.buildingNo && errors.buildingNo.message}
            </span>
          </div>

          <div className="group" style={{ marginBlock: "25px" }}>
            <label className="form-input-label">Appartment No</label>
            <input
              className="form-input"
              {...register("appartmentNo", {
                required: "Appartment No is required",
              })}
            />
            <span className="err-message">
              {errors.appartmentNo && errors.appartmentNo.message}
            </span>
          </div>
        </div>

        {/* Optional */}
        <div className="group" style={{ marginBlock: "25px" }}>
          <label className="form-input-label">
            Landmark <span style={{ fontSize: "1rem" }}> (optional)</span>
          </label>
          <input className="form-input" {...register("landMark")} />
        </div>

          <Button buttonName="Proceed to Payment" type="submit" />
      </form>
    </div>
  );
}

export default ShippingDetails;
