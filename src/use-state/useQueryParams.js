import { useLocation, useHistory } from 'react-router-dom';

const pairs = arr => arr.reduce((acc, x, i) => {
    if (i % 2 === 0) {
        return [...acc, [x]];
    } else {
        const last = acc[acc.length - 1];
        const everythingElse = acc.slice(0, acc.length - 1);
        return [...everythingElse, [...last, x]];
    }
}, [])[0] || [];

const fold = arr => pairs(arr).reduce((acc, pair) => {
    return {
        ...acc,
        [pair[0]]: pair[1],
    }
}, {});

export const useQueryParams = () => {
    const location = useLocation();
    const currentParamsObj = new URLSearchParams(location.search);
    const currentParams = fold([...currentParamsObj.entries()]);
    const history = useHistory();

    const setQuery = (key, value) => {
        console.log('Setting query');
        console.log({ key, value });
        const newQueryParams = new URLSearchParams({ ...currentParams, [key]: value });
        history.push({
            pathname: location.pathname,
            search: `?${newQueryParams.toString()}`,
        });
    };      

    const removeQuery = (...queryNames) => {
        const queryParams = { ...currentParams };
        queryNames.forEach(q => delete queryParams[q]);
        const newQueryParams = new URLSearchParams(queryParams);
        history.push({
            pathname: location.pathname,
            search: `?${newQueryParams.toString()}`,
        });
    };

    return {
        params: currentParams,
        setQuery,
        removeQuery,
    }
}