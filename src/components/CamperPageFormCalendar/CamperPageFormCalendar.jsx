import Datepicker from "react-datepicker";
import { registerLocale } from 'react-datepicker';
import enGB from 'date-fns/locale/en-GB'; // Локаль с понедельника
import 'react-datepicker/dist/react-datepicker.css';
import './CamperPageFormCalendar.css';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';



// Регистрируем новую локаль
registerLocale('en-GB', enGB);

const CamperPageFormCalendar = ({
  field, 
  form, 
//   ...props
}) => {
  // OR const { setFieldValue } = form;
  // OR const { value, name } = field;

  
return (
  <div>
    <Datepicker
    //   dateFormat="dd/MM/yyyy"
      {...field}
      selected={field.value}
      onChange={(val) => form.setFieldValue(field.name, val)}
     
      
      locale="en-GB" // Устанавливаем кастомную локаль
      dateFormat="P" // Формат отображения даты
      placeholderText = {"Booking date*"}
    />
  </div>)
};
export default CamperPageFormCalendar ;