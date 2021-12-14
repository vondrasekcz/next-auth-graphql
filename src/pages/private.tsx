import { CountryCodeEnum, useTestQuery, } from '@/apollo/graphql';
import { getLayout, } from '@/components/Layout';
import { withPrivatePage, } from '@/components/withPrivatePage';


const PrivatePage = (): JSX.Element => {
  const { loading, error, data, } = useTestQuery({
    variables: {
      countryCode: CountryCodeEnum.Cz,
    },
  });

  console.log(loading, error, data?.brands);

  return (
    <div>

      <h1>
        Private Page
      </h1>

      <div>
        {loading && (
          <div>Loading</div>
        )}
        {error && (
          <div>Loading</div>
        )}
        {data && (
          <ul>
            {data.brands.map((item) => (
              <li key={item.key}>
                {item.value}
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
};


PrivatePage.getLayout = getLayout;


export default withPrivatePage(PrivatePage);
