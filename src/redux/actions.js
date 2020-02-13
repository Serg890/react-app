export const logUser = user => {
  return {
    type: "LOGIN_USER_SUCCESS",
    payload: user
  };
};

export const failureLogin = user => {
  return {
    type: "LOGIN_USER_FAILURE",
    payload: user
  };
};

export const successData = rData => {
  return {
    type: "DATA_SUCCESS",
    payload: rData
  };
};

export const errorData = error => {
  return {
    type: "DATA_ERROR",
    payload: error
  };
};

export const addItem = rData => {
  return {
    type: "ADD_TABLE_ITEM",
    payload: rData
  };
};

export const editData = rData => {
  return {
    type: "EDIT_TABLE_ITEM",
    payload: rData
  };
};

export const removeItem = rData => {
  return {
    type: "REMOVE_TABLE_ITEM",
    payload: rData
  };
};

export const removeCheked = rItem => {
  return {
    type: "REMOVE_CHEKED_TABLE_ITEM",
    payload: rItem
  };
};
