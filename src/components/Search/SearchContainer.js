import React from "react";
import ptx from "../../apis/ptx";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";
import SearchLoadMoreBtn from "./SearchLoadMoreBtn";

class SearchContainer extends React.Component {
    state = {
        term: "",
        result: [],
        btnVisible: false,
    };

    onAppendResult = async () => {
        const perPage = 30;
        const category = this.props.category;
        const query = `${category}?$filter=contains(Name,'${this.state.term}')&$top=${perPage}&$skip=${this.state.result.length}&$format=JSON`;

        const response = await ptx.get(query);

        this.setState(prev => {
            const s = new Set([...prev.result, ...response.data]);
            
            return { 
                result : [...s],
                btnVisible: (response.data.length >= perPage)
            };
        });
    }
    
    onSearchSubmit = async (term) => {
        await this.setState({ term : term, result: [] });
        this.onAppendResult();
    };

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <SearchList result={this.state.result} />
                <SearchLoadMoreBtn onClick={this.onAppendResult} isVisible={this.state.btnVisible} />
            </div>
        );
    }
}

export default SearchContainer;