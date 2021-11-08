import React, { useEffect, useState } from "react";
import Card from "./card";
import ptx from "../apis/ptx";

const Col3Container = ({ title = "", url = "", position = "" }) => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const fetchData = async (query) => {
            try {
                const response = await ptx.get(query);
                setDatas(response.data);
            } catch(e) {}
        };
        
        const nearby = (position) ? `&$spatialFilter=nearby(${position.PositionLat}, ${position.PositionLon}, 850)` : "";
        const q = `${url}?$top=3&$format=JSON` + nearby;
        fetchData(q);
    }, [url]);
    
    return (
        <>
            <h2>{title}</h2>
            <section className="row">
                {
                    datas.map(data => (
                        <section className="col" key={data.ID}>
                            <Card data={data} key={data.ID} type={url} />
                        </section>
                    ))
                }
            </section>
        </>
    );
};

export default Col3Container;