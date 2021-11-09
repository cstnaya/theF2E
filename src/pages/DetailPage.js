import React from "react";
import Header from "../components/header";
import ItemDetail from "../components/ItemDetail";
import Col3Container from '../components/Col3Container';
import ptx from '../apis/ptx';
import Footer from "../components/footer";

const FirstUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class DetailPage extends React.Component {
    state = {
        type: "",
        id: 0,
        data: {},
    };

    changeNewParams = async () => {
        const newType = this.props.match.params.type;
        if (this.state.type !== FirstUpperCase(newType)) {
            this.setState({ type : FirstUpperCase(newType) });
        }

        const newId = this.props.match.params.id;
        if (this.state.id !== newId) {
            this.setState({ id: newId });
        }
    };

    fetchData = async (query) => {
        const response = await ptx.get(query);
        this.setState({ data : response.data[0] });
    }

    async componentDidMount() {
        await this.changeNewParams();
        const q = `${this.state.type}?$filter=ID eq '${this.state.id}'&$top=1&$format=JSON`;
        this.fetchData(q);
    }

    async componentDidUpdate(prev, prevState) {
        await this.changeNewParams();
        if (prevState.id === this.state.id && prevState.type === this.state.type) {
            return ;
        }
        const q = `${this.state.type}?$filter=ID eq '${this.state.id}'&$top=1&$format=JSON`;
        this.fetchData(q);
    }

    render() {
        const data = this.state.data;
        const type = this.state.type;
        return (
            <>
                <Header />
                <main>
                    <ItemDetail data={data} />
                    { (data.Position && type !== 'Restaurant' ) && <Col3Container title="附近美食 Restaurant" url="Restaurant" position={data.Position} /> }
                    { (data.Position && type !== 'Hotel' ) && <Col3Container title="附近旅宿 Hotel" url="Hotel" position={data.Position} /> }
                    { (data.Position && type !== 'Activity' ) && <Col3Container title="附近活動 Activity" url="Activity" position={data.Position} /> }
                </main>
                <Footer />
            </>
        );
    }
}

export default DetailPage;