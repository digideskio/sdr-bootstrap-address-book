/**
 * Created by Olexiy Lyhun on 17.08.2016.
 */
import { createSelector } from 'reselect';

/**
 * Direct selector to the counters state domain
 */

const getCounters = () => (state) => state.get('counters').counters;
const getListTodo = () => (state) => state.get('olexiyTodo').listTodo;
const getOlexiyCounter = () => (state) =>  state.get('olexiyTodo').olexiyCounter;

export {
    getCounters,
    getListTodo,
    getOlexiyCounter
};