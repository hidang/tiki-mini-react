import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import s from './tab.module.css';

export interface TabProps {
  children: React.ReactNode;
  active?: number;
}

const _Tab: React.FC<TabProps> = ({ children, active = 0 }) => {
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState<any>([]);

  useEffect(() => {
    let data: any = [];

    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;

      const {
        props: { tab, children }
      } = element;
      data.push({ tab, children });
    });

    setTabsData(data);
  }, [children]);

  return (
    <div className={s.container}>
      <div className={s.tabs}>
        {tabsData.map((tab: any, index: number) => (
          <div
            key={`tab-item-${index}`}
            className={classnames(
              s.tabItem,
              index === activeTab && s.tabActive
            )}
            onClick={() => setActiveTab(index)}
          >
            {tab.tab}
          </div>
        ))}
      </div>

      <div className={s.tabContent}>
        {tabsData[activeTab] && tabsData[activeTab]?.children}
      </div>
    </div>
  );
};

interface PropTabPanes {
  tab: string;
  children: React.ReactNode;
}

const TabPane: React.FC<PropTabPanes> = ({ children }): JSX.Element => {
  return <>{children}</>;
};

export const Tab = {
  TabPane: TabPane,
  Tab: _Tab
};
