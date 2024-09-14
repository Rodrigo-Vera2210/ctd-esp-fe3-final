export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DOCTORES":
        console.log(action.payload)
        return { ...state, doctores: action.payload}
    case "ADD_FAV":
        return { ...state, favs: [...state.favs, action.payload] };
    case "TOGGLE_THEME":
        return { ...state };
    case "REMOVE_FAV":
        const filteredFavs = state.favs.filter(
          (fav) => fav.id !== action.payload.id
        );
        return { ...state, favs: filteredFavs };
    default:
        return { state }
  }
}

