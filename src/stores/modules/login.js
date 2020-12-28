var login = {
  namespaced: true,
  state: {
    name: localStorage.getItem("username")
  }
};
export default login