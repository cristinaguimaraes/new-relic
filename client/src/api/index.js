const data = require('./host-app-data.json');

export const getData = () => {
    return {data: data, error: null}
}