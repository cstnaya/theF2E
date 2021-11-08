import React from "react";
import { NavLink } from "react-router-dom";
import nonexist from '../img/nonexist.png';

const Card = ({ data, type }) => {
    const { ID, Picture, Name, Address, WebsiteUrl } = data;
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
            { Picture && <img   src={photo.src} 
                                alt={photo.alt} 
                                title={photo.alt}
                                onError={(e) => {e.target.onerror=null;
                                    e.target.alt='此店家沒有提供圖片';
                                    e.target.src=nonexist;
                                }} />
            }
            <div className="cardbody">
                <ul>
                    <li>
                        <h3>{Name}</h3>
                    </li>
                    <li>
                        住址：{ Address && Address }
                    </li>
                    <li>
                        官網：{ WebsiteUrl && <a href={WebsiteUrl} target="_blank" rel="noreferrer" title={`前往${Name}官方網站`}>官方網站</a> }
                    </li>
                    <li>
                        { <NavLink to={newTo} title={`移動到詳細資訊頁：${Name}`}>詳細內容</NavLink> }
                    </li>
                </ul>
            </div>
        </article>
    );
};

export default Card;