import { getLayout, } from '@/components/Layout';
import { useDialTypesQuery, } from '@/apollo/graphql';


const HomePage = (): JSX.Element => {
  const { loading, error, data, } = useDialTypesQuery();
  console.log('useDialTypesQuery', loading, error, data);

  return (
    <div>

      <h1>
        Index Page
      </h1>

      {loading && <div>Loading</div>}
      {error && <div>{JSON.stringify(error)}</div>}
      {data && (
        <ul>
          {data.dialTypes.map((brand) => (
            <li key={brand.key}>
              {brand.value}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};


HomePage.getLayout = getLayout;


export default HomePage;
