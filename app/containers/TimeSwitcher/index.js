import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { changeTimeOfUpdateAction, incrementSecondsAction } from './actions';
import TimeSwitcherPanel from 'components/TimeSwitcherPanel';
import { getTimeOfUpdate, getTotalSeconds } from './selectors'

import { fetchGetPosts } from 'api';
import { changeMassegeListAction } from 'containers/ChatLoader/actions';


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (e) => {
            e.preventDefault();
            dispatch(changeTimeOfUpdateAction(parseInt(e.target.value)));
        },
        onTimer: () => {
            dispatch(incrementSecondsAction());
        }

    }
};


const mapStateToProps = createStructuredSelector({
    selectedTime: getTimeOfUpdate(),
    totalSeconds: getTotalSeconds()
});

const TimeSwitcher = connect(mapStateToProps, mapDispatchToProps)(TimeSwitcherPanel);

export default TimeSwitcher;
