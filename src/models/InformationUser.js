import { MainUser } from "./MainUser.js";

export class InformationUser extends MainUser {
  constructor(
    education_level,
    work_experience,
    designation,
    created_date_time,
    salary_amount,
    no_of_employees,
    primary_technology,
    user_rating,
    year_of_pay,
    currency_type
  ) {
    super(
      education_level,
      work_experience,
      designation,
      created_date_time,
      user_rating,
      no_of_employees
    );
    this._salary_amount = salary_amount;
    this._primary_technology = primary_technology;
    this._year_of_pay = year_of_pay;
    this._currency_type = currency_type;
  }
}
