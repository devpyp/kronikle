/*global chrome*/
export const History = {
  state: () => ({
    items: []
  }),
  getters: {
    getHistoryItems: state => {
      return state.items;
    },
    getGroupedHistoryItems: state => {
      let result = [];
      let tmp = [];
      let prefix = "";

      state.items.forEach(item => {
        // Get Domain
        let trimmed = item.url.split("://")[1];
        let domain = trimmed.split("/")[0];

        if (prefix == "") {
          prefix = domain;
          tmp.push(item.url);
          return;
        }
        if (prefix == domain) {
          tmp.push(item.url);
        } else {
          result.push({'domain': prefix, 'values': tmp});
          prefix = domain;
          tmp = [item.url];
        }
      });
      result.push(tmp);
      return result;
    }
  },
  actions: {
    search: async (context, filters) => {
      await chrome.history.search(filters, function(data) {
        context.commit("updateHistory", data);
      });
    }
  },
  mutations: {
    updateHistory: (state, data) => {
      state.items = data;
    }
  }
};
