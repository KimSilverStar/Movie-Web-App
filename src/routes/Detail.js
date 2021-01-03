import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;

        // URL에 직접 "/movie-detial" 친 경우
        if (location.state === undefined)
            history.push("/");  // Home URL로 이동
    }

    render() {
        const { location } = this.props;
        if (location.state)
            return <span>{location.state.title}</span>;
        else
            return null;
    }
}

export default Detail;