import React, { FC } from "react";
import { PageBlock } from "vtex.styleguide";

const AdminExample: FC = () => {
  return (
    <div className="bg-muted-5 pa8">
      <PageBlock title="Modificador de Banner" subtitle="Acá podrás modificar el banner" variation="full">
        <h1>Hello, World!</h1>
      </PageBlock>
    </div>
  );
};

export default AdminExample;
