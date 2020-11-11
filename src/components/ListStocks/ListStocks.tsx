import * as React from 'react';
import { connect } from 'react-redux';
import { Data } from '../../types'
import Paper from "@material-ui/core/Paper/Paper";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableContainer from "@material-ui/core/TableContainer/TableContainer";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

interface IListStocksProps {
    data: Data,
    removeValue: any
}

export class ListStocks extends React.Component<IListStocksProps> {
    public render() {
        const { data, removeValue } = this.props as IListStocksProps;

        return (
            <React.Fragment>
                {Object.values(data).length > 0
                    ? <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ISIN Stock Code</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell padding="checkbox"/>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Object.values(data).map((row, idx: number) => {
                                    return (
                                        <TableRow key={row.isin}>
                                            <TableCell component="th" scope="row">
                                                {row.isin}
                                            </TableCell>
                                            <TableCell
                                                align="right"><strong>{row.price.toFixed(2)}</strong></TableCell>
                                            <TableCell padding="checkbox">
                                                <DeleteOutlineIcon
                                                    style={{cursor: 'pointer'}}
                                                    color="action"
                                                    onClick={() => removeValue(row.isin)}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    : <p style={{textAlign:'center'}}>Please choose or add ISIN code</p>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state: IListStocksProps) => ({
    data: state.data
});

export default connect(mapStateToProps)(ListStocks);
