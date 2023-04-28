import { Card } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";


const Search = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const { name } = useParams();
  useEffect(() => {
    const call = async () => {
      setLoading(true)
      const res = await axios.post('http://localhost:5000/subjects/searchbyname', { name: name })
      setLoading(false)
      console.log(res.data.data[0])
      setData(res.data.data[0]);

    }
    call()
    console.log('search')
  }, [])

  return (
    <div>
      {
        loading ? <h1>Loading...</h1> : (
          <div>
            <h1>{data.subjectName}</h1>
            {
              data.articles.map((item) => (
                <Card style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',marginBottom:'20px'}} title={item.title} bordered={false}>
                  <div dangerouslySetInnerHTML={{__html: item.description}}></div>
                </Card>
                // <div>
                //   <div dangerouslySetInnerHTML={{__html: item}}></div>
                // </div>
              ))
            }
          </div>
        )

      }
    </div>
  )
}

export default Search