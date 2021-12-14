import React from "react";
import {
  ProfileWrapp,
  ProfileTitleWrapp,
  ProfileTitle,
  ProfileSectorGrid,
  ProfileDashboardWrapp,
} from "./Profile.styles";
import ProfileForm from "./ProfileForm";

const Profile = () => {
  return (
    <>
      <ProfileWrapp>
        <ProfileTitleWrapp>
          <ProfileTitle>Perfil</ProfileTitle>
        </ProfileTitleWrapp>
        <ProfileSectorGrid>
          <ProfileDashboardWrapp>
            <ProfileForm />
          </ProfileDashboardWrapp>
        </ProfileSectorGrid>
      </ProfileWrapp>
    </>
  );
};

export default Profile;
