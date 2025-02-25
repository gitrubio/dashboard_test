import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ChartsView } from 'src/sections/charts';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Blog - ${CONFIG.appName}`}</title>
      </Helmet>

      <ChartsView />
    </>
  );
}
