import information from "../../../utils/informations.json";

export const designationOptions = information.designation.map((value) => (
  <option key={value.label} value={value.value}>
    {value.label}
  </option>
));

export const workExperienceOptions = information.workExperience.map((value) => (
  <option key={value.label} value={value.value}>
    {value.label}
  </option>
));

export const noOfEmployeesOptions = information.numberOfEmployees.map(
  (value) => (
    <option key={value.label} value={value.value}>
      {value.label}
    </option>
  )
);

export const currencyOptions = information.currency.map((value) => (
  <option key={value} value={value}>
    {value}
  </option>
));

export const ratingOption = information.ratings.map((value) => (
  <option key={value} value={value}>
    {value}
  </option>
));

export const educationOption = information.educationLevel.map((value) => (
  <option key={value.label} value={value.value}>
    {value.label}
  </option>
));

const currentYear = new Date().getFullYear();
const years = Array.from(new Array(10), (val, index) => currentYear - index);
export const yearOption = years.map((year) => (
  <option key={year} value={year}>
    {year}
  </option>
));
