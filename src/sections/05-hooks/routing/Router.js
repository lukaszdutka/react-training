const Router = ({path, children}) => {
  console.log(path === window.location.pathname)
  return window.location.pathname === path ? children : null;
}

export default Router;