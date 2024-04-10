import { Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div>I am the Navigation Bar</div>
      <Outlet />
    </div>
  );
};

export default Navigation;
