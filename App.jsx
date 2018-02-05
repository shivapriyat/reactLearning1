import React from 'react';
var elastic=require('./main.js')


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            data: elastic.elasticData.hits.hits

        }
        console.log('state');
        console.log(this.state.data);
    }
    render() {
        var myStyle = {
            'border': '5px solid black',
            'border-collapse': 'collapse',
             'padding': '15px'
         }
        return (
            <div>
                <Header />
                <table style={myStyle}>
                <tr style={myStyle}>
                <td style={myStyle}>Note</td>
                <td style={myStyle}>CreatedOn</td>
                <td style={myStyle}>UserName</td>
            </tr>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key={i}
                            data={person["_source"]} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>SOACS18.1.3</h1>
            </div>
        );
    }
}
class TableRow extends React.Component {
    render() {
        var myStyle = {
            'border': '5px solid black',
             'border-collapse': 'collapse',
             'padding': '15px'
         }
        return (
            <tr style={myStyle}>
                <td style={myStyle}>{this.props.data.note}</td>
                <td style={myStyle}>{this.props.data.createdOn}</td>
                <td style={myStyle}>{this.props.data.userName}</td>
            </tr>
        );
    }
}
export default App;