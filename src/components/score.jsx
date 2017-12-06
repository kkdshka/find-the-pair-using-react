import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions/scoreActions.jsx';

class Score extends React.Component {
    renderFilters() {
        let id = 0;
        const filters = ['2', '4', '6', '8', '10', '12'];
        const filtersJsx = [];
        filters.forEach((filter) => {
            filtersJsx.push(
                <span className={'filter'} key={'filter' + id.toString()} onClick={() => this.props.handleOnFilterClick(filter)}>
                    {filter} x {filter}
                </span>);
            id++
        });
        return filtersJsx;
    }

    renderData() {
        const dataJsx = [];
        let id = 0;
        this.props.filteredScoreData.forEach((data) => {
            dataJsx.push(
                <tr key={'row' + id.toString()}>
                    <td className={'cell'}>{data.playerName}</td>
                    <td className={'cell'}>{data.score}</td>
                    <td className={'cell'}>{data.date}</td>
                </tr>
            );
            id++;
        });
        return dataJsx;
    }

    render() {
        return (
            <div>
                <div className={'links-wrapper'}>
                    <Link className={'link'} to={'/settings'}>Settings</Link>
                </div>
                <div className={'filters-wrapper'}>
                    {this.renderFilters()}
                </div>
                <div className={'score-table-wrapper'}>
                    <table className={'score-table'}>
                        <caption className={'score-caption'}>Best scores</caption>
                        <thead>
                        <tr>
                            <th className={'cell'}>Name</th>
                            <th className={'cell'}>Score</th>
                            <th className={'cell'}>Date</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.renderData()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        filteredScoreData: state.scoreReducer.filteredScoreData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleOnFilterClick: (filter) => {
            dispatch(actions.handleOnFilterClick(filter));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Score);
