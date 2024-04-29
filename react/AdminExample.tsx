import React, { FC } from "react";
import { PageBlock } from "vtex.styleguide";
import { useQuery } from 'react-apollo'

import helloworld from './graphql/banner.gql'

const AdminExample: FC = () => {
  const { data } = useQuery(helloworld)
  return (
    <div className="bg-muted-5 pa8">
      <PageBlock title="Modificador de Banner" subtitle="Acá podrás modificar el banner" variation="full">
        <h1>Texto del banner:</h1>
        <p>{data?.banner}</p>
      </PageBlock>
    </div>
  );
};

export default AdminExample;
