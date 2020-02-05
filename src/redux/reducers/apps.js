import {
  ADD_APP,
  DELETE_APP,
  SAVE_INITIAL_DATA
} from "redux/actions/constants";

export const initialState = {
  data: []
};

export function apps(state = initialState, action) {
  switch (action.type) {
    case SAVE_INITIAL_DATA:
      return {data: action.payload.data};
    case ADD_APP:
      const newApp = action.payload.app;
      return {data: [...state.data, newApp]};
    case DELETE_APP:
      return {
        data: [
          ...state.data.slice(0, action.payload.appIndex),
          ...state.data.slice(action.payload.appIndex + 1, state.data.length)
        ]
      };
    default:
      return state;
  }
}

export const hostsWithApps = state => {
  if (state.data.length === 0) return {};
  const hosts = [
    ...state.data.reduce((acc, each) => {
      each.host.forEach(eachHost => {
        acc.add(eachHost);
      });
      return acc;
    }, new Set())
  ];

  const dataSortedByApdex = state.data.sort((a, b) => b.apdex - a.apdex);
  return hosts.reduce((acc, eachHost) => {
    acc[eachHost] = dataSortedByApdex.filter(app =>
      app.host.includes(eachHost)
    );
    return acc;
  }, {});
};
