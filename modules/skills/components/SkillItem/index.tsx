import useTheme from 'hooks/useTheme';
import { cn } from 'lib/utils';
import { map } from 'lodash';
import React, { createContext, memo, useContext } from 'react';

type SkillItem = {
  category: string;
  item: {
    title: string;
    image: {
      src: string;
    };
  }[];
};

const SkillContext = createContext<SkillItem>({
  category: '',
  item: [],
});

export const useSkillContext = () => useContext(SkillContext);

const Root = ({
  category,
  item,
  children,
}: {
  category: string;
  children: React.ReactNode;
  item: {
    title: string;
    image: {
      src: string;
    };
  }[];
}) => {
  return <SkillContext.Provider value={{ category, item }}>{children}</SkillContext.Provider>;
};

const Category = () => {
  const { category } = useSkillContext();
  const { isDarkMode } = useTheme();

  return (
    <div
      className={cn(
        `font-bold text-center text-2xl`,
        isDarkMode ? `text-light-800` : `text-paletteText-primary`,
      )}
    >
      {category}
    </div>
  );
};

const Item = () => {
  const { item } = useSkillContext();
  const { isDarkMode } = useTheme();

  return (
    <div
      className={cn(
        `flex flex-wrap gap-12 w-full px-8 sm:w-2/3 mx-auto justify-center`,
        isDarkMode ? `text-light-800` : `text-paletteText-primary`,
      )}
    >
      {map(item, (item: any, key: number) => (
        <div
          key={'SKILL-' + key}
          className="flex items-center flex-col justify-center space-y-2 text-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item?.image?.src} className="w-12 h-12 sm:h-16 mx-auto object-contain" alt="" />
          <div className="font-semibold">{item?.title}</div>
        </div>
      ))}
    </div>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Root: memo(Root),
  Category: memo(Category),
  Item: memo(Item),
};
