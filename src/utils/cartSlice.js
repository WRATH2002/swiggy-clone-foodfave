import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemName: [],
    isVeg: [],
    price: [],
    id: [],
    flag: [0],
    restuarantInfo: [],
  },
  reducers: {
    addItemName: (state, action) => {
      state.itemName.push(action.payload);
      console.log(state.itemName);
    },
    addRestuarantInfo: (state, action) => {
      state.restuarantInfo.push(action.payload);
      // const product = state.restuarantInfo;
      console.log();
    },
    totalAmount: (state) => {
      // state.isVeg.push(action.payload);
      var totalQty = 0;
      state.itemName.forEach((item) => {
        totalQty += item.qty * item.price;
        // console.log(item.qty);
      });
      state.price[0] = totalQty;
      console.log(state.price);
    },
    incQty: (state, action) => {
      const idToChange = action.payload;
      const product = state.itemName.find(
        (product) => product.id === idToChange
      );
      product.qty++;
      console.log(product.qty);
    },
    decQty: (state, action) => {
      const idToChange = action.payload;
      const product = state.itemName.find(
        (product) => product.id === idToChange
      );
      product.qty--;
      console.log(product.qty);
      // state.price.push(action.payload);
    },
    removeItem: (state, action) => {
      const idToDelete = action.payload;
      state.itemName = state.itemName.filter(
        (item) => item.id !== idToDelete.id
      );
      console.log(state.itemName);
    },
    clearCart: (state) => {
      state.restuarantInfo = [];
      // state.itemName = [];
    },
    clearItemName: (state) => {
      state.itemName = [];
    },
    incFlag: (state) => {
      state.flag[0] = 1;
    },
    decFlag: (state) => {
      state.flag[0] = 0;
    },
    uniqueItem: (state) => {
      const uniqueItem = [];
      const uniqueItemId = new Set();

      state.itemName.forEach((item) => {
        if (!uniqueItemId.has(item.id)) {
          uniqueItemId.add(item.id);
          uniqueItem.push(item);
        }
      });

      state.itemName = uniqueItem;
    },
  },
});

export const {
  incFlag,
  decFlag,
  addItemName,
  addIsVeg,
  addPrice,
  removeItem,
  clearCart,
  incQty,
  decQty,
  totalAmount,
  addRestuarantInfo,
  uniqueItem,
  clearItemName,
} = cartSlice.actions;

export default cartSlice.reducer;
