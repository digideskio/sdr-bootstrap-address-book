/**
 * Created by DMedzatiy on 17-Aug-16.
 */

import { createSelector } from 'reselect';

/**
 * Direct selector to the dimaComponent state domain
 */

const getDimaTodos = () => (state) => state.get('dimaTodos').todos;

export {
    getDimaTodos,
};