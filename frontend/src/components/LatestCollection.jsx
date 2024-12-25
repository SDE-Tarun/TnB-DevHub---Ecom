import HeaderDashed from "./HeaderDashed";

import React from "react";

const LatestCollection = () => {
  return (
    <section className="latest-collections mt-6">
      {/* Header with title and description */}
      <HeaderDashed
        head1="LATEST"
        head2="COLLECTIONS"
        paragraph="Discover our Latest Collection of premium bedsheets and comforters, where style meets ultimate comfort for your dream bedroom!"
      />
    </section>
  );
};

export default LatestCollection;
