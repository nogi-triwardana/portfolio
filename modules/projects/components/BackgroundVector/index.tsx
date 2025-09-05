import useTheme from 'hooks/useTheme';

const BackgroundVector = () => {
  const { isDarkMode } = useTheme();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill={`${isDarkMode ? `#1f0a4d` : `#d1d0cd`}`}
        fillOpacity="1"
        d="M0,32L40,32C80,32,160,32,240,74.7C320,117,400,203,480,229.3C560,256,640,224,720,192C800,160,880,128,960,101.3C1040,75,1120,53,1200,69.3C1280,85,1360,139,1400,165.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
  );
};

export default BackgroundVector;
