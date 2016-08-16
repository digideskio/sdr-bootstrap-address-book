/**
 * Created by Olexiy Lyhun on 16.08.2016.
 */

import { createSelector } from 'reselect';

/**
 * Select the language locale
 */

const selectLocale = () => createSelector(
    selectLanguage(),
    (languageState) => languageState.get('locale')
);

export {
    selectLocale,
};