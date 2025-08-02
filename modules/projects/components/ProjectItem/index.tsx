import { isEmpty, map } from 'lodash';
import { createContext, memo, useContext } from 'react';
import { createPortal } from 'react-dom';
import { Tooltip } from 'react-tooltip';

const ProjectContext = createContext<ProjectData>({
  index: 0,
  is_true_real_url: false,
  title: '',
  identity: '',
  description: '',
  responsibilities: [],
  technologies: '',
  url: '',
});

const UtilitiesContext = createContext<{
  firstPort: boolean;
  isDarkMode: boolean;
}>({
  firstPort: false,
  isDarkMode: false,
});

export const useProjectsContext = () => useContext(ProjectContext);

export const useUtilitiesContext = () => useContext(UtilitiesContext);

const Root = ({
  project,
  children,
  isDarkMode,
  firstPort,
}: {
  project: ProjectData;
  children: React.ReactNode | React.ReactNode[];
  firstPort: boolean;
  isDarkMode: boolean;
}) => {
  return (
    <UtilitiesContext.Provider value={{ firstPort, isDarkMode }}>
      <ProjectContext.Provider value={project}>
        <div className={`space-y-2`}>{children}</div>
      </ProjectContext.Provider>
    </UtilitiesContext.Provider>
  );
};

const Title = () => {
  const { is_true_real_url, index, title, url } = useProjectsContext();
  const { isDarkMode, firstPort } = useUtilitiesContext();

  const redirectUrlProject = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div onClick={() => redirectUrlProject(url)} className={`font-bold text-base sm:text-lg`}>
      <div
        data-tooltip-id={'tooltip-title-project-detail'}
        data-tooltip-content={
          'Unknown URL, because it was just requested to create code and give it to the client. But I can pass the source code URL at github if you want to see it.'
        }
        data-tooltip-place={'right'}
        data-tooltip-is-show={String(is_true_real_url)}
        className={`relative inline-block group hover:cursor-pointer hover:underline hover:text-blue-400`}
      >
        <span
          className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-dark-900` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`}
        />
        {index + 1}. {title}
      </div>
    </div>
  );
};

const Identity = () => {
  const { identity } = useProjectsContext();
  const { firstPort, isDarkMode } = useUtilitiesContext();

  return (
    <div className={`relative inline-block text-sm italic`}>
      <span
        className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-dark-900` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`}
      />
      {identity}
    </div>
  );
};

const Description = () => {
  const { firstPort, isDarkMode } = useUtilitiesContext();
  const { description } = useProjectsContext();

  return (
    <div className={`relative block text-sm sm:text-base`}>
      <span
        className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-dark-900` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`}
      />
      {description}.
    </div>
  );
};

const Responsibilites = () => {
  const { firstPort, isDarkMode } = useUtilitiesContext();
  const { responsibilities } = useProjectsContext();

  if (isEmpty(responsibilities)) {
    return null;
  }

  return (
    <div className={``}>
      <div className={`relative inline-block text-sm sm:text-base`}>
        <span
          className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-dark-900` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`}
        />
        Responsibilites:
      </div>
      <ul>
        {map(responsibilities, (val, key) => (
          <li
            key={'responsibilities-' + key}
            className={`relative block text-sm sm:text-base min-w-full sm:min-w-[500px]`}
          >
            <div
              className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-dark-900` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`}
            />
            &bull; {val}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Technologies = () => {
  const { technologies } = useProjectsContext();
  const { firstPort, isDarkMode } = useUtilitiesContext();

  if (isEmpty(technologies)) {
    return null;
  }

  return (
    <div className={``}>
      <div className={`relative inline-block text-sm sm:text-base`}>
        <span
          className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-dark-900` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`}
        />
        Technologies:
      </div>
      <div>
        <div className={`relative inline-block text-sm sm:text-base`}>
          <span
            className={`${firstPort ? `animate-scanning` : `${isDarkMode ? `bg-dark-900` : `bg-paletteText-primary`} absolute rounded-md inline w-full h-full`}`}
          />
          {technologies}
        </div>
      </div>
    </div>
  );
};

const TooltipPortal = () => {
  return createPortal(
    <Tooltip
      id={'tooltip-title-project-detail'}
      render={({ content, activeAnchor }) =>
        activeAnchor?.getAttribute('data-tooltip-is-show') === 'false' ? (
          <div className="max-w-[400px]">{content}</div>
        ) : null
      }
    />,
    document.body,
    'tooltip-title-project',
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Root: memo(Root),
  Title: memo(Title),
  Identity: memo(Identity),
  Description: memo(Description),
  Responsibilites: memo(Responsibilites),
  Technologies: memo(Technologies),
  TooltipPortal: memo(TooltipPortal),
};
