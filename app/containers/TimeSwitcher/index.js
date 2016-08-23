import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { changeTimeOfUpdateAction } from './actions';
import TimeSwitcherPanel from 'components/TimeSwitcherPanel';
import { getTimeOfUpdate } from './selectors'

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (e) => {
            e.preventDefault();
            dispatch(changeTimeOfUpdateAction(parseInt(e.target.value)));
        }
    }
}

const mapStateToProps = createStructuredSelector({
    selectedTime: getTimeOfUpdate()
});

const TimeSwitcher = connect(mapStateToProps, mapDispatchToProps)(TimeSwitcherPanel);

export default TimeSwitcher;
