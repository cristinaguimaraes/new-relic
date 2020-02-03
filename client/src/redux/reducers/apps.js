import {ADD_APP, DELETE_APP, SAVE_INITIAL_DATA} from "../actions/constants";

export const initialState = {
   data: []
};

export function apps(state = initialState, action) {
    switch (action.type) {
        case SAVE_INITIAL_DATA:
            return {data:action.payload.data};
        case ADD_APP:
            const newApp = action.payload.app;
            return{data: [...state.data, newApp]};
        case DELETE_APP:
            const appIndex = state.data.findIndex(eachApp => eachApp.name === action.payload.app);
            if (appIndex !== -1) {
                return([...state.data.slice(0, appIndex), ...state.data.slice(appIndex + 1, apps.length)])
            }
        default:
            return state;
    }
}


 export const hostsWithApps = state => {
     const hosts = [...state.data.reduce((acc, each) => {
         each.host.forEach(eachHost => {
             acc.add(eachHost)
         });
         return acc;
     }, new Set())];

     const dataSortedByApdex = state.data.sort((a, b) => b.apdex - a.apdex);
console.log(state, hosts, dataSortedByApdex)
     return hosts.reduce((acc, eachHost) => {
         acc[eachHost] = dataSortedByApdex.filter(app => app.host.includes(eachHost));
         return acc
     }, {});
 };



