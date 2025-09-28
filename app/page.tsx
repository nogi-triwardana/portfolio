import ParentLoad from 'components/ui/loader/ParentLoad';
import IndexPage from 'modules/page';
import React, { Suspense } from 'react';

import { constants } from '../constants';
import getGlobalDataHandler from './actions';

export default async function Index() {
  const response = await getGlobalDataHandler();

  const extractedData = {
    headers_title: response?.header_title,
    identity: response?.identity,
    education: constants.education,
    experience: response?.experiences,
    projects: response?.projects,
    certificate: response?.certificate,
    skills: constants.skills,
    contact: response?.contacts,
    honors: constants.honors,
    utilities: response?.utilities,
  };

  return (
    <Suspense fallback={<ParentLoad />}>
      <IndexPage extractedData={extractedData} />
    </Suspense>
  );
}
