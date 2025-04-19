export function LogOut(navigateTo){
    sessionStorage.getItem("userData") ? sessionStorage.removeItem("userData") : null;
    navigateTo("/");
};