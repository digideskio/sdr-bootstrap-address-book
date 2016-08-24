
const getTimeOfUpdate = () => (state) => state.get('timeSwitch').timeOfUpdate;
const getTotalSeconds = () => (state) => state.get('timeSwitch').totalSeconds;

export {
    getTimeOfUpdate,
    getTotalSeconds
}
