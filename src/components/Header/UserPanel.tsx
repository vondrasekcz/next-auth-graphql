import { AuthUserFragment, } from '@/apollo/graphql';
import { useLogout, } from '@/libs/auth/hooks/useLogout';


interface Props {
  authUser: AuthUserFragment
}


const UserPanel = ({
  authUser,
}: Props): JSX.Element => {
  const [ logoutMutation, logoutMutationData, ] = useLogout();

  const handleLogout = () => logoutMutation();


  return (
    <div>
      <div>
        {authUser.email}
      </div>
      <div>
        <button
          onClick={handleLogout}
          disabled={logoutMutationData.loading}
        >
          Logout
        </button>
      </div>
      {logoutMutationData.error && (
        <div
          style={{ border: '3px solid red', }}
        >
          <pre
            style={{ overflowX: 'auto', }}
          >
            {JSON.stringify(logoutMutationData.error, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};


export default UserPanel;
