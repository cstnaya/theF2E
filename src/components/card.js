import React from "react";
import { NavLink } from "react-router-dom";
import nonexist from '../img/nonexist.png';

const Card = ({ data, type }) => {
    const { ID, Picture, Name, Address, WebsiteUrl, OpenTime, Phone } = data;
    const newTo = {
        pathname: `/${type}/${ID}`,
        // data: data
    };

    const photo = { src : nonexist, alt : '此店家沒有提供圖片' };
    if (Picture) {
        if (Picture.PictureUrl1) { photo.src = Picture.PictureUrl1; }
        if (Picture.PictureDescription1) { photo.alt = Picture.PictureDescription1; }
    }

    return (
        <article>
            { Picture && 
                <div className='cardbody-image'>
                    <NavLink to={newTo} title={`另開新視窗，到詳細資訊頁：${Name}`} target="_blank" rel="noreferrer">
                        <img    src={photo.src} 
                                alt={photo.alt}
                                // title={photo.alt}
                                onError={(e) => {e.target.onerror=null;
                                    e.target.alt='此店家沒有提供圖片';
                                    e.target.src=nonexist; }} 
                        />
                    </NavLink>
                </div>
            }
            <div className="cardbody">
                <ul>
                    <li>
                        <h3>
                            <NavLink to={newTo} title={`另開新視窗，到詳細資訊頁：${Name}`} target="_blank" rel="noreferrer">{Name}</NavLink>
                        </h3>
                    </li>
                    {
                        OpenTime && <li>
                                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                                        <span className="sr-only">開放時間：</span>
                                        {OpenTime}
                                    </li>
                    }
                    {
                        Phone && <li>
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <span className="sr-only">電話：</span>
                                    {Phone}
                                 </li>
                    }
                    {
                        Address &&  <li>
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <span className="sr-only">住址：</span>
                                        {Address}
                                    </li>
                    }
                    {
                        WebsiteUrl &&   <li>
                                            <i className="fa fa-globe" aria-hidden="true"></i>
                                            <span className="sr-only">官網：</span>
                                            <a href={WebsiteUrl} target="_blank" rel="noreferrer" title={`另開新視窗，前往${Name}官方網站`}>官方網站</a>
                                        </li>
                    }
                </ul>
            </div>
        </article>
    );
};

export default Card;