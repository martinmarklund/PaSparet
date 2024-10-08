import React, { useState } from "react";

import NotFound from "../pages/NotFound";
import Mexico from "../components/Round";

type ComponentProps = {
  id: number;
  name: string;
  component: React.FC | null;
};

const initialComponents: ComponentProps[] = [
  { id: 1, name: "Game One", component: null },
  { id: 2, name: "Game Two", component: null },
  { id: 3, name: "Game Three", component: null },
  { id: 4, name: "Game Four", component: Mexico },
];

const Game: React.FC = () => {
  const [components, setComponents] =
    useState<ComponentProps[]>(initialComponents);
  const [activeComponent, setActiveComponent] = useState<number | null>(null);

  const handleComponentClick = (id: number) => {
    setActiveComponent(id);
  };

  //   const addComponent = (newComponent: ComponentProps) => {
  //     setComponents((prevComponents) => [...prevComponents, newComponent]);
  //   };

  const renderActiveComponent = () => {
    const active = components.find(
      (component) => component.id === activeComponent
    );
    if (active) {
      return active.component ? <active.component /> : <NotFound />;
    }
    return null;
  };

  return (
    <div className="flex flex-col justify-center content-center text-center">
      <h1 className="text-2xl">Games</h1>
      <ul className="flex justify-center">
        {components.map((component) => (
          <li
            className="text-l p-2 hover:scale-105 transition-transform duration-100"
            key={component.id}
            onClick={() => handleComponentClick(component.id)}
          >
            {component.name}
          </li>
        ))}
      </ul>
      {renderActiveComponent()}
    </div>
  );
};

export default Game;
