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
      console.log(res.data)
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
              data.map((item) => (
                <Card title="Card title" bordered={false}>
                  {}
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