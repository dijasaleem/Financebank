import { FunctionComponent } from "react";
import "./NotificationIcon.css";

export type NotificationIconType = {
  className?: string;
};

const NotificationIcon: FunctionComponent<NotificationIconType> = ({
  className = "",
}) => {
  return (
    <div className={`notification-icon ${className}`}>
      <img
        className="notification-icon-child"
        loading="lazy"
        alt=""
        src="/group-2.svg"
      />
    </div>
  );
};

export default NotificationIcon;
