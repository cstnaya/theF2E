import React from "react";
import nonexist from '../img/nonexist.png';
import 'font-awesome/css/font-awesome.min.css';

const ItemDetail = ({ data }) => {
    const { Picture, Name, Address, Phone, Description, TravelInfo, OpenTime, WebsiteUrl, Position } = data;
    const photo = { src : nonexist, alt : '此店家沒有提供圖片' };
    
    if (Picture) {
        if (Picture.PictureUrl1) { photo.src = Picture.PictureUrl1; }
        if (Picture.PictureDescription1) { photo.alt = Picture.PictureDescription1; }
    }

    return (
        <section>
            <article>
                <div className="cardbody-details">
                    <div className="cardbody-photo">
                        { Picture && <img   src={photo.src} 
                                            alt={photo.alt} 
                                            title={photo.alt} 
                                            onError={(e) => {e.target.onerror=null; 
                                                            e.target.src=nonexist; 
                                                            e.target.alt='此店家沒有提供圖片';
                                            }} />
                        }
                    </div>
                    <ul className="cardbody-list">
                        <li>
                            <h3>{Name}</h3>
                        </li>
                        <li>{Address}</li>
                        <li>{OpenTime}</li>
                        <li>{Phone}</li>
                        <li>{TravelInfo}</li>
                        <li><a href={WebsiteUrl} title={`前往官網：${Name}`}>官方網站連結</a></li>
                        <i className="fa fa-spinner fa-spin"></i>
                    </ul>
                </div>
                <div className="cardbody-description">
                    {Description}
                </div>
            </article>
        </section>
    );
};

export default ItemDetail;