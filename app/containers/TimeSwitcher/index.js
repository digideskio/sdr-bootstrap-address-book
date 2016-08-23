import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { changeTimeOfUpdateAction } from './actions';
import TimeSwitcherPanel from 'components/TimeSwitcherPanel';
import { getTimeOfUpdate } from './selectors'

import { fetchGetPosts } from 'api';
import { changeMassegeListAction } from 'containers/ChatLoader/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (e) => {
            e.preventDefault();
            dispatch(changeTimeOfUpdateAction(parseInt(e.target.value)));
        }
    }
};

const mapStateToProps = createStructuredSelector({
    selectedTime: getTimeOfUpdate()
});

const TimeSwitcher = connect(mapStateToProps, mapDispatchToProps)(TimeSwitcherPanel);

export default TimeSwitcher;
