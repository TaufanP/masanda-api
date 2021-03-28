import { body } from "express-validator";
import V from "./Vocab";

const fullname = body("fullname")
  .matches(/^[a-z ,.'-]+$/i)
  .isLength({ min: 7, max: 15 })
  .withMessage("Input fullname Min 5 and Max 20 characters.")
  .trim();

const gender_is_male = body("gender_is_male")
  .isBoolean()
  .withMessage("Input gender_is_male using Boolean.");

const email = body("email")
  .matches(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
  .withMessage("Email invalid.")
  .trim();

const username = body("username")
  .matches(/^(?=[a-z0-9._]{5,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/)
  .withMessage(
    "Input username Min 5 and Max 15 characters, Only contains alphanumeric characters, underscore and dot."
  )
  .trim();

const password = body("password")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  )
  .withMessage(
    "Input password Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character."
  );

const product_name = body("product_name")
  .isAlpha()
  .isLength({ max: 60 })
  .withMessage(V.pNameErr)
  .trim();

const price = body("price")
  .isFloat()
  .isLength({ max: 60 })
  .withMessage(V.priceErr)
  .trim();

export const SignUpValidation = [
  fullname,
  email,
  gender_is_male,
  username,
  password,
];

export const AddProductValidation = [product_name, price];
