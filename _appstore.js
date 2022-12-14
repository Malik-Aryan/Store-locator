import create from "zustand";


export const useAppStore = create((set, get) => ({
  data: {},

  seachValue: '',
  search: (text) => {
    set(() => ({ searchValue: text }));
  },

  lat: 28.57966,
  setLat: (data) => {
    set(() => ({ lat: data }));
  },

  long: 77.32111,
  setLong: (data) => {
    set(() => ({ long: data }));
  },

  getStore: async () => {
    try {
      const response = await fetch("https://uat8.uat.froogal.ai/dedicated-api/merchants?merchantAccessToken=oauth");
      const image = await fetch("https://uat6.uat.froogal.ai/dedicated-api/content?model=outletsInfo&merchantAccessToken=qgxYq80Z72BcH0GluKM05J5f8m0RBEYP2FyrHx1E");
      const json = await response.json();
      const imagejson = await image.json();
      console.log(imagejson.data[0].image)
      json.data["image"] =
        "https://uat6.uat.froogal.ai/media/websites/15/images/uploads/1669616488sh2R.png";
      set(() => ({ data: json.data }));
      return json.data;
    } catch (error) {
      console.error(error);
    }
  },
  searchStore: () => {
    if (useAppStore.getState().searchValue.length > 1) {
      get().data
        .filter((data) => data.name.includes(useAppStore.getState().searchValue))
        .map((filteredData) => {
          filteredData["image"] =
            "https://uat6.uat.froogal.ai/media/websites/15/images/uploads/1669616488sh2R.png";
          console.log(filteredData);
          set(() => ({ data: [filteredData] }));
        });
    } else {
      get().getStore();
    }
  },
}));
