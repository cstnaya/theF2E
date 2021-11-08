import React from "react";
import ptx from "../../apis/ptx";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";
import SearchLoadMoreBtn from "./SearchLoadMoreBtn";
import '../../css/search.css';

class SearchContainer extends React.Component {
    state = {
        term: "",
        city: "",
        result: [],
        btnVisible: false,
    };

    onAppendResult = async () => {
        const perPage = 30;
        const category = this.props.category;
        const query = `${category}${this.state.city}?$filter=contains(Name,'${this.state.term}')&$top=${perPage}&$skip=${this.state.result.length}&$format=JSON`;

        const response = await ptx.get(query);

        this.setState(prev => {
            const s = new Set([...prev.result, ...response.data]);
            
            return { 
                result : [...s],
                btnVisible: (response.data.length >= perPage)
            };
        });
    }
    
    onSearchSubmit = async (term, city) => {
        await this.setState({ term : term, result: [], city : city });
        this.onAppendResult();
    };

    render() {
        return (
            <div className="search">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <SearchList result={this.state.result} />
                <SearchLoadMoreBtn onClick={this.onAppendResult} isVisible={this.state.btnVisible} />
            </div>
        );
    }
}

export default SearchContainer;