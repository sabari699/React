import React, { useEffect, useState } from 'react';
import instance from '../api/instance';
import Divider from '@mui/material/Divider';
export default function List1() {
    useEffect(() => {
        getAPI()
    }, [])
    const [loadingValue, setValue] = useState(0);
    const [listData, setlistData] = useState([]);
    async function getAPI() {
        var response = await instance({
            url: "/posts",
            method: "GET"
        })
        setlistData(response.data);
        setValue(1);
    }
    const htmlRendering = loadingValue === 0 ? <div>List 0</div> : <div>List 1</div>
    return (
        <>
        {loadingValue !== 0 ?
            <div className="wrapper">
                <div className="container">
                    <div className="content">
                        <h3>{htmlRendering}</h3>
                        {
                            listData.map((item, key1) => <div  key={key1}>{item.title} {item.id}  <Divider></Divider>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            : <div>Loading ...</div>}
        </>
    )
}
