import { cn } from 'lib/utils';
import React, { createContext, memo, ReactNode, useContext } from 'react';

const ExperienceContext = createContext<ExperienceData>({
  index: 0,
  office: '',
  role: '',
  time: '',
});

export const useExperienceContext = () => useContext(ExperienceContext);

const Root = ({
  children,
  experience,
  totalItem,
}: {
  children: ReactNode | ReactNode[];
  experience: ExperienceData;
  totalItem: number;
}) => {
  return (
    <ExperienceContext.Provider value={experience}>
      <div
        className={cn(
          'flex divide-x-4',
          experience.index === totalItem - 1 ? 'divide-transparent' : 'divide-dashed',
        )}
      >
        <div className={``} />
        <div className={`relative pb-4 pl-3 sm:pl-6`}>
          <div
            className={cn(
              `absolute -left-2.5 w-4 h-4 rounded-full`,
              experience.index === 0 ? `bg-[#0092ac] animate-ping` : `bg-gray-200`,
            )}
          />
          <div
            className={cn(
              `absolute -left-2.5 w-4 h-4 rounded-full`,
              experience.index === 0 ? `bg-[#0092ac]` : `bg-gray-200`,
            )}
          />
          <div className="flex flex-col">{children}</div>
        </div>
      </div>
    </ExperienceContext.Provider>
  );
};

const Office = () => {
  const { office, index } = useExperienceContext();

  return (
    <div className={`px-2 text-sm sm:text-base ${index === 0 ? `font-bold` : `font-semibold`}`}>
      {office}
    </div>
  );
};

const Role = () => {
  const { role } = useExperienceContext();

  return <div className={`font-medium text-xs sm:text-sm px-2`}>{role}</div>;
};

const Time = () => {
  const { time } = useExperienceContext();

  return <div className={`font-medium text-xs sm:text-sm px-2`}>{time}</div>;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  /**
   * Root of ExperienceItem component to render child of experience data as wrapper
   * @param children - The child of experience item to rendered
   * @param experience - The object data of experience from backend
   * @param totalItem - The total item of experience data from backend
   * @returns JSX.Element - The rendered root of ExperienceItem component
   *
   * @example
   * <ExperienceItem.Root
   *  key={'EXPERIENCE-' + index}
   *  experience={{ ...item, index }}
   *  totalItem={experience.length}
   * >
   *   <ExperienceItem.Office />
   *   <div
   *    className={cn(
   *      `px-2 text-sm sm:text-base`,
   *      index === 0 ? `font-bold` : `font-semibold`,
   *    )}
   *   >
   *    <ExperienceItem.Role />
   *    <ExperienceItem.Time />
   *   </div>
   * </ExperienceItem.Root>
   */
  Root: memo(Root),
  Office: memo(Office),
  Role: memo(Role),
  Time: memo(Time),
};
