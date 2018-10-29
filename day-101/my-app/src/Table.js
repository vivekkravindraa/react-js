import React, {Component} from 'react';

// Using CLASS COMPONENT

// class Table extends Component {
//     render() {
//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Job</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>Charlie</td>
//                         <td>Janitor</td>
//                     </tr>
//                     <tr>
//                         <td>Mac</td>
//                         <td>Bouncer</td>
//                     </tr>
//                     <tr>
//                         <td>Dee</td>
//                         <td>Aspiring actress</td>
//                     </tr>
//                     <tr>
//                         <td>Dennis</td>
//                         <td>Bartender</td>
//                     </tr>
//                 </tbody>
//             </table>
//         );
//     }
// }

// Using SIMPLE COMPONENTS

// const TableHeader = () => { 
//     return (
//         <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Job</th>
//             </tr>
//         </thead>
//     );
// }

// const TableBody = () => { 
//     return (
//         <tbody>
//             <tr>
//                 <td>Charlie</td>
//                 <td>Janitor</td>
//             </tr>
//             <tr>
//                 <td>Mac</td>
//                 <td>Bouncer</td>
//             </tr>
//             <tr>
//                 <td>Dee</td>
//                 <td>Aspiring actress</td>
//             </tr>
//             <tr>
//                 <td>Dennis</td>
//                 <td>Bartender</td>
//             </tr>
//         </tbody>
//     );
// }

// Moving Static Table Body Content To An Array And Then Rendering It.
// Using PROPS

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { characterData } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} />
            </table>
        );
    }
}

export default Table;
// export default TableHeader;
// export default TableBody;