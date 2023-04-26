import { Input, Space } from 'antd';
import {useNavigate} from 'react-router-dom'
const { Search } = Input;

// const onSearch = (value) => console.log(value);
const Searchbar = () => {
    const navigate = useNavigate();
    function onSearch(){
        navigate("/search")
    }
    return(


        <Search placeholder="Engineering" onSearch={onSearch} enterButton />
 

  )
};
export default Searchbar;