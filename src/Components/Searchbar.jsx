// import { Input, Space,AutoComplete } from 'antd';
// import { useNavigate } from 'react-router-dom'
// import { useState } from 'react';
// import axios from 'axios';
// const { Search } = Input;

// // search bar
// const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;


// // const onSearch = (value) => console.log(value);
// const Searchbar = () => {
//     const navigate = useNavigate();
//     const [searchResults, setSearchResults] = useState([])
//     function onSearch() {
//         navigate("/search")
//     }
//     const searchResult = async (query) =>{
//         const arr = ["Banana", "Orange", "Apple", "Mango"];
//         const response = await axios.post('http://localhost:5000/subjects/search', { name: query });
//         console.log(response.data)

//         const data = response.data.map((item) => {
//             return item.subjectName
//         })


//         if (Array.isArray(data)) {
//             return data
//                 .join('.')
//                 .split('.')
//                 .map((_, idx) => {
//                     return {
//                         // value: category,
//                         label: (
//                             <div
//                                 style={{
//                                     display: 'flex',
//                                     justifyContent: 'space-between',
//                                 }}
//                             >
//                                 <span>
//                                     {_.subjectName}
//                                 </span>
//                             </div>
//                         ),
//                     };
//                 });
//         } else {
//             return [];
//         }
//     }


//     // search bar
//     const [options, setOptions] = useState([]);
//     const handleSearch = (value) => {
//         setOptions(value ? searchResult(value) : []);
//     };
//     const onSelect = (value) => {
//         console.log('onSelect', value);
//     };
//     return (
//         <>

//             <Search placeholder="Engineering" onSearch={onSearch} enterButton />

//             <br />
//             <AutoComplete
//                 dropdownMatchSelectWidth={252}
//                 style={{
//                     width: 300,
//                 }}
//                 options={options}
//                 onSelect={onSelect}
//                 onSearch={handleSearch}
//             >
//                 <Input.Search size="large" placeholder="input here" enterButton />
//             </AutoComplete>
//         </>

//     )
// };
// export default Searchbar;


import { useState } from 'react';
import { Input, List } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

const { Search } = Input;

const Searchbar = () => {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (value) => {
        setSearchText(value);
        if (value.length > 0) {
            const response = await axios.post('http://localhost:5000/subjects/search', { name: value });
            console.log(response.data.data)
            let data = response.data.data.map((item) => item.subjectName)
            data = data.slice(0, 10);
            setSearchResults(data);
        } else {
            setSearchResults([]);
        }
    };

    return (
        <div style={{width: "500px"}}>
            <Search
                placeholder="Search"
                value={searchText}
                onChange={(e) => handleSearch(e.target.value)}
            />
            {
                searchResults.length > 0 && (
                    <List
                        dataSource={searchResults}
                        renderItem={(item) => (
                            <Link to={`/search/${item}`}>
                                <List.Item>
                                    {item}
                                </List.Item>
                            </Link>
                        )}
                    />

                )}

        </div>
    );
};

export default Searchbar;
