import useTheme from 'hooks/useTheme';

const BackgroundVector = () => {
  const { isDarkMode } = useTheme();

  return (
    <svg className="absolute -top-[1px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill={`${isDarkMode ? `#1f0a4d` : `#d1d0cd`}`}
        fillOpacity="1"
        d="M0,96L34.3,90.7C68.6,85,137,75,206,58.7C274.3,43,343,21,411,21.3C480,21,549,43,617,96C685.7,149,754,235,823,256C891.4,277,960,235,1029,218.7C1097.1,203,1166,213,1234,234.7C1302.9,256,1371,288,1406,304L1440,320L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
      ></path>
    </svg>
  );
};

export default BackgroundVector;
