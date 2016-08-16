/**
 * Created by Olexiy Lyhun on 16.08.2016.
 */

import { createStore } from 'redux';
import todoApp from './reducers';

let store = createStore(todoApp);
