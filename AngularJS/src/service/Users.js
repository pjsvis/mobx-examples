export default ($http, AppState) => {
    const _list = () => {
        return $http.get("https://randomuser.me/api/?results=20").then(r => r.data.results);
    };

    return () => {
        AppState.loading = true;
        _list().then(users => {
            AppState.users = users;
            AppState.loading = false;
        }).catch(() => {
            AppState.loading = false;
        });
    };
};