import { Input, Space } from 'antd';
import { useNavigate } from 'react-router-dom'
const { Search } = Input;

// const onSearch = (value) => console.log(value);
const Searchbar = () => {
    const navigate = useNavigate();
    function onSearch() {
        navigate("/search")
    }
    return (

        <div className='search-bar'>
            <Search size='large' placeholder="Engineering" onSearch={onSearch} enterButton />
        </div>


    )
};
export default Searchbar;