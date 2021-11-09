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
                        {
                            TravelInfo &&   <li className="info">
                                                <span>
                                                    <i className="fa fa-car" aria-hidden="true"></i>
                                                    <span className="sr-only">交通方式：</span>
                                                </span>
                                                <span>
                                                    {TravelInfo}
                                                </span>
                                            </li>
                        }
                    </ul>
                </div>
                <div className="cardbody-description">
                    {Description ? Description : "此店家沒有任何描述。"}
                </div>
            </article>
        </section>
    );
};

export default ItemDetail;