import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import TimeSwitcherPanel from 'components/TimeSwitcherPanel';
import { getTimeOfUpdate, getTotalSeconds } from './selectors'


const mapDispatchToProps = dispatch => bindActionCreators({...actions}, dispatch);

const mapStateToProps = createStructuredSelector({
    selectedTime: getTimeOfUpdate(),
    totalSeconds: getTotalSeconds()
});

const TimeSwitcher = connect(mapStateToProps, mapDispatchToProps)(TimeSwitcherPanel);

export default TimeSwitcher;
