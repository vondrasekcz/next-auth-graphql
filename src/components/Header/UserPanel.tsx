const UserPanel = (): JSX.Element => {
  const handleLogout = () => {};


  return (
    <div>
      <div>
        username
      </div>
      <div>
        <button
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};


export default UserPanel;
