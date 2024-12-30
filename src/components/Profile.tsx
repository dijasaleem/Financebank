import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

export type ProfileType = {
  className?: string;
};

const Profile: FunctionComponent<ProfileType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onProfileContainerClick = useCallback(() => {
    navigate("/111-settings");
  }, [navigate]);

  return (
    <div className={`profile ${className}`} onClick={onProfileContainerClick}>
      <div className="name-picture">
        <img className="image-icon" loading="lazy" alt="" src="/image@2x.png" />
        <div className="name">
          <div className="tanzir-rahman">Tanzir Rahman</div>
          <div className="view-profile">View profile</div>
        </div>
      </div>
      <div className="icon11">
        <div className="icon-child" />
        <div className="icon-child" />
        <div className="icon-child" />
      </div>
    </div>
  );
};

export default Profile;
