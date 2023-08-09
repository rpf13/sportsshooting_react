import { useState } from 'react';

const useProfileData = () => {
  const [profileData, setProfileData] = useState({
    pageProfile: { results: [] }
  });

  return { profileData, setProfileData };
};

export default useProfileData;
