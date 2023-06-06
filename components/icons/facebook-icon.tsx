import React from 'react';

interface FacebookIconProps {
  className?: string;
  color?: string;
}

export const FacebookIcon: React.FC<FacebookIconProps> = ({
  className,
  color = '#35363A',
}) => {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.25 14.0749C26.25 7.26802 20.7655 1.75 14 1.75C7.23451 1.75 1.75 7.26802 1.75 14.0749C1.75 20.2265 6.22962 25.3254 12.0859 26.25V17.6375H8.97559V14.0749H12.0859V11.3595C12.0859 8.27062 13.9148 6.5644 16.7129 6.5644C18.0528 6.5644 19.4551 6.80512 19.4551 6.80512V9.83819H17.9104C16.3888 9.83819 15.9141 10.7883 15.9141 11.764V14.0749H19.3115L18.7684 17.6375H15.9141V26.25C21.7704 25.3254 26.25 20.2265 26.25 14.0749Z"
        fill={color}
      />
    </svg>
  );
};
