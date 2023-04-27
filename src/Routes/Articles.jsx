import '../styles/upload.css'
import InputField from '../Components/InputField';


const Articles = () => {

  return (

          <InputField

            formItems={
              [
                {label:"Subject",placeholder:"Maths"},
                {label:"Semester",placeholder:"8"},
                // {label:"subject",placeholder:"Math"},
                // {label:"semester",placeholder:"7th"},
              ]
            }

          />

  );
};
export default Articles;