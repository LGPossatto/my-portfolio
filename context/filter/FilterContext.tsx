import { createContext, FC, useState } from "react";

interface IFilterContext {
  tagsNum: number;
  tags: { [x: string]: boolean };
  tagStatusChange: (key: string) => void;
}

export const FilterContext = createContext<IFilterContext>({
  tagsNum: 0,
  tags: {},
  tagStatusChange: () => {},
});

interface props {
  children: React.ReactNode;
}

export const FilterProvider: FC<props> = ({ children }) => {
  const [tagsNum, setTagsNum] = useState(0);
  const [tags, setTags] = useState<{ [x: string]: boolean }>({
    HTML: false,
    CSS: false,
    Sass: false,
    Javascript: false,
    Typescript: false,
    React: false,
    React_Native: false,
    Jest: false,
    NodeJS: false,
    NextJS: false,
    MongoDB: false,
    Firebase: false,
    GraphQL: false,
    Android: false,
    Kotlin: false,
    Dart: false,
    Flutter: false,
  });

  const tagStatusChange = (key: string) => {
    const newTags = { ...tags };

    if (newTags[key]) {
      setTagsNum(tagsNum - 1);
    } else {
      setTagsNum(tagsNum + 1);
    }

    newTags[key] = !newTags[key];
    setTags(newTags);
  };

  return (
    <FilterContext.Provider value={{ tagsNum, tags, tagStatusChange }}>
      {children}
    </FilterContext.Provider>
  );
};
