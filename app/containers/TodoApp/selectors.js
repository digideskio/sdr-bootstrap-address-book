/**
 * Created by DMedzatiy on 17-Aug-16.
 */

import { createSelector } from 'reselect';

/**
 * Direct selector to the counters state domain
 */

const getCounters = () => (state) => state.get('counters').counters;

export {
    getCounters,
};