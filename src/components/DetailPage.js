import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import ptx from "../apis/ptx";

class DetailPage extends React.Component {    
    state = {
        id: 0,
        type: "",
        item: {},
    };

    render() {
        return (
            <div>
                <Link to="/activity/222">link 1</Link>
                <Link to="/activity/3567">link 2</Link>
                {this.state.id}
            </div>
        );
    }
};

export default DetailPage;