import '../styles/home.css'
// import url from "../assets/sample.pdf"
import InputField from '../Components/InputField';

const url = "https://www.africau.edu/images/default/sample.pdf"
const Syllabus = () => {

  return (

    <>        
        <InputField
          formItems={
            [
              {label:"Subject",placeholder:"Maths"},
              {label:"Semester",placeholder:"8"},
            ]
          }
        />
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>          
          <iframe src={url} style={{width:"85%",height:"975px",display:"block"}}></iframe>
        </div>
    </> 

  );
};
export default Syllabus;