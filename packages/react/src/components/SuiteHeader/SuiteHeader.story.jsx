/* eslint-disable no-script-url */
/* eslint-disable-next-line no-alert */

import React from 'react';
import { text, object, boolean, select } from '@storybook/addon-knobs';
import { Switcher24 } from '@carbon/icons-react';
import Chip from '@carbon/icons-react/lib/chip/24';
import Dashboard from '@carbon/icons-react/lib/dashboard/24';
import Group from '@carbon/icons-react/lib/group/24';
import NotificationOn from '@carbon/icons-react/lib/notification/24';
import Bee from '@carbon/icons-react/lib/bee/24';
import Car from '@carbon/icons-react/lib/car/24';
import Chat from '@carbon/icons-react/lib/chat/24';

import SuiteHeader from './SuiteHeader';
import SuiteHeaderI18N from './i18n';

const sideNavLinks = [
  {
    icon: Switcher24,
    isEnabled: true,
    metaData: {
      tabIndex: 0,
      label: 'Boards',
      element: ({ children, ...rest }) => <div {...rest}>{children}</div>,
      // isActive: true,
    },
    linkContent: 'Boards',
    childContent: [
      {
        metaData: {
          label: 'Yet another link',
          title: 'Yet another link',
          element: 'button',
        },
        content: 'Yet another link',
      },
    ],
  },
  {
    isEnabled: true,
    icon: Chip,
    metaData: {
      label: 'Devices',
      href: 'https://google.com',
      element: 'a',
      target: '_blank',
    },
    linkContent: 'Devices',
  },
  {
    isEnabled: true,
    icon: Dashboard,
    metaData: {
      label: 'Dashboards',
      href: 'https://google.com',
      element: 'a',
      target: '_blank',
    },
    linkContent: 'Dashboards',
    childContent: [
      {
        metaData: {
          label: 'Link 1',
          title: 'Link 1',
          element: 'button',
        },
        content: 'Link 1',
      },
      {
        metaData: {
          label: 'Link 2',
          title: 'Link 2',
        },
        content: 'Link 2',
      },
    ],
  },
  {
    isEnabled: true,
    icon: Group,
    metaData: {
      label: 'Members',
      element: 'button',
    },
    linkContent: 'Members',
    childContent: [
      {
        metaData: {
          label: 'Yet another link',
          title: 'Yet another link',
          element: 'button',
        },
        content: 'Link 3',
        isActive: true,
      },
    ],
  },
];

const customActionItems = [
  {
    label: 'bell',
    btnContent: (
      <span id="bell-icon">
        <NotificationOn id="notification-button" fill="white" description="Icon" />
      </span>
    ),
  },
  {
    label: 'bee',
    hasHeaderPanel: true,
    btnContent: (
      <span id="bee-icon">
        <Bee
          fill="white"
          description="Icon"
          className="bx--header__menu-item bx--header__menu-title"
        />
      </span>
    ),
    childContent: [
      {
        metaData: {
          href: 'http://google.com',
          title: 'this is a title',
          target: '_blank',
          rel: 'noopener noreferrer',
          element: 'a',
        },
        content: <span id="a-message">this is my message to you</span>,
      },
      {
        metaData: {
          element: 'button',
        },
        content: (
          <span id="an-email">
            JohnDoe@ibm.com
            <Chat fill="white" description="Icon" />
          </span>
        ),
      },
    ],
  },
  {
    label: 'car',
    btnContent: (
      <span id="car-icon">
        <Car fill="white" description="Icon" />
      </span>
    ),
    childContent: [
      {
        metaData: {
          href: 'http://google.com',
          title: 'this is a title',
          target: '_blank',
          rel: 'noopener noreferrer',
          element: 'a',
        },
        content: <span id="another-message">this is my message to you</span>,
      },
      {
        metaData: {
          element: 'button',
        },
        content: (
          <span id="another-email">
            JohnDoe@ibm.com
            <Chat fill="white" description="Icon" />
          </span>
        ),
      },
    ],
  },
];

const customHelpLinks = [
  {
    metaData: {
      href: 'http://www.ibm.com',
      target: '_blank',
      rel: 'noopener noreferrer',
      element: 'a',
    },
    content: <span id="custom-help-link">{'{A custom help link}'}</span>,
  },
  {
    metaData: {
      href: 'http://google.com',
      target: '_blank',
      rel: 'noopener noreferrer',
      element: 'a',
    },
    content: <span id="another-custom-help-link">{'{Another custom help link}'}</span>,
  },
  {
    metaData: {
      element: 'a',
      href: 'javascript:void(0)',
      onClick: () => alert('custom help menu action'),
    },
    content: <span id="yet-another-custom-help-link">{'{Yet another custom help link}'}</span>,
  },
];

const customProfileLinks = [
  {
    metaData: {
      href: 'http://www.ibm.com',
      target: '_blank',
      rel: 'noopener noreferrer',
      element: 'a',
    },
    content: <span id="custom-profile-link">{'{A custom profile link}'}</span>,
  },
  {
    metaData: {
      href: 'http://google.com',
      target: '_blank',
      rel: 'noopener noreferrer',
      element: 'a',
    },
    content: <span id="another-custom-profile-link">{'{Another custom profile link}'}</span>,
  },
  {
    metaData: {
      element: 'a',
      href: 'javascript:void(0)',
      onClick: () => alert('custom profile menu action'),
    },
    content: (
      <span id="yet-another-custom-profile-link">{'{Yet another custom profile link}'}</span>
    ),
  },
];

const customApplications = [
  {
    id: 'customapp1',
    name: 'Custom Application',
    href: 'https://www.ibm.com',
  },
  {
    id: 'customapp2',
    name: 'Another Custom Application',
    href: 'https://google.com',
    isExternal: true,
  },
];

export default {
  title: 'Watson IoT/SuiteHeader',

  parameters: {
    component: SuiteHeader,
  },
};

export const Default = () => {
  const language = select('Language', Object.keys(SuiteHeaderI18N), 'en');
  return (
    <SuiteHeader
      suiteName={text('suiteName', 'Application Suite')}
      appName={text('appName', 'Application Name')}
      userDisplayName={text('userDisplayName', 'Admin User')}
      username={text('username', 'adminuser')}
      isAdminView={boolean('isAdminView', false)}
      routes={object('routes', {
        profile: 'https://www.ibm.com',
        navigator: 'https://www.ibm.com',
        admin: 'https://www.ibm.com',
        logout: 'https://www.ibm.com',
        whatsNew: 'https://www.ibm.com',
        gettingStarted: 'https://www.ibm.com',
        documentation: 'https://www.ibm.com',
        requestEnhancement: 'https://www.ibm.com',
        support: 'https://www.ibm.com',
        about: 'https://www.ibm.com',
        workspaceId: 'workspace1',
        domain: 'ibm.com',
      })}
      i18n={SuiteHeaderI18N[language]}
      applications={object('applications', [
        {
          id: 'monitor',
          name: 'Monitor',
          href: 'https://www.ibm.com',
        },
        {
          id: 'health',
          name: 'Health',
          href: 'https://www.ibm.com',
          isExternal: true,
        },
      ])}
    />
  );
};

Default.story = {
  name: 'default',
};

export const HeaderWithSideNav = () => (
  <SuiteHeader
    suiteName="Application Suite"
    appName="Application Name"
    userDisplayName="Admin User"
    username="adminuser"
    routes={{
      profile: 'https://www.ibm.com',
      navigator: 'https://www.ibm.com',
      admin: 'https://www.ibm.com',
      logout: 'https://www.ibm.com',
      whatsNew: 'https://www.ibm.com',
      gettingStarted: 'https://www.ibm.com',
      documentation: 'https://www.ibm.com',
      requestEnhancement: 'https://www.ibm.com',
      support: 'https://www.ibm.com',
      about: 'https://www.ibm.com',
    }}
    applications={[
      {
        id: 'monitor',
        name: 'Monitor',
        href: 'https://www.ibm.com',
      },
      {
        id: 'health',
        name: 'Health',
        href: 'https://www.ibm.com',
        isExternal: true,
      },
    ]}
    sideNavProps={{
      links: sideNavLinks,
    }}
  />
);

HeaderWithSideNav.story = {
  name: 'Header with side nav',
};

export const HeaderWithCustomSideNav = () => (
  <SuiteHeader
    suiteName="Application Suite"
    appName="Application Name"
    userDisplayName="Admin User"
    username="adminuser"
    routes={{
      profile: 'https://www.ibm.com',
      navigator: 'https://www.ibm.com',
      admin: 'https://www.ibm.com',
      logout: 'https://www.ibm.com',
      whatsNew: 'https://www.ibm.com',
      gettingStarted: 'https://www.ibm.com',
      documentation: 'https://www.ibm.com',
      requestEnhancement: 'https://www.ibm.com',
      support: 'https://www.ibm.com',
      about: 'https://www.ibm.com',
    }}
    applications={[
      {
        id: 'monitor',
        name: 'Monitor',
        href: 'https://www.ibm.com',
      },
      {
        id: 'health',
        name: 'Health',
        href: 'https://www.ibm.com',
        isExternal: true,
      },
    ]}
    hasSideNav
    onSideNavToggled={() => alert('onSideNavToggled')}
  />
);
HeaderWithCustomSideNav.story = {
  name: 'Header with application-controlled side nav',
};

export const HeaderWithCustomActionItems = () => (
  <SuiteHeader
    suiteName="Application Suite"
    appName="Application Name"
    userDisplayName="Admin User"
    username="adminuser"
    routes={{
      profile: 'https://www.ibm.com',
      navigator: 'https://www.ibm.com',
      admin: 'https://www.ibm.com',
      logout: 'https://www.ibm.com',
      whatsNew: 'https://www.ibm.com',
      gettingStarted: 'https://www.ibm.com',
      documentation: 'https://www.ibm.com',
      requestEnhancement: 'https://www.ibm.com',
      support: 'https://www.ibm.com',
      about: 'https://www.ibm.com',
    }}
    applications={[
      {
        id: 'monitor',
        name: 'Monitor',
        href: 'https://www.ibm.com',
      },
      {
        id: 'health',
        name: 'Health',
        href: 'https://google.com',
        isExternal: true,
      },
    ]}
    customActionItems={customActionItems}
    customHelpLinks={customHelpLinks}
    customProfileLinks={customProfileLinks}
    customApplications={customApplications}
  />
);

HeaderWithCustomActionItems.story = {
  name: 'Header with custom action items',
};

export const HeaderWithSurveyNotification = () => {
  const language = select('Language', Object.keys(SuiteHeaderI18N), 'en');
  return (
    <SuiteHeader
      suiteName={text('suiteName', 'Application Suite')}
      appName={text('appName', 'Application Name')}
      userDisplayName={text('userDisplayName', 'Admin User')}
      username={text('username', 'adminuser')}
      isAdminView={boolean('isAdminView', false)}
      routes={object('routes', {
        profile: 'https://www.ibm.com',
        navigator: 'https://www.ibm.com',
        admin: 'https://www.ibm.com',
        logout: 'https://www.ibm.com',
        whatsNew: 'https://www.ibm.com',
        gettingStarted: 'https://www.ibm.com',
        documentation: 'https://www.ibm.com',
        requestEnhancement: 'https://www.ibm.com',
        support: 'https://www.ibm.com',
        about: 'https://www.ibm.com',
      })}
      i18n={{
        ...SuiteHeaderI18N[language],
        surveyTitle: (solutionName) =>
          SuiteHeaderI18N[language].surveyTitle.replace('{solutionName}', solutionName),
        profileLogoutModalBody: (solutionName, userName) =>
          SuiteHeaderI18N[language].profileLogoutModalBody
            .replace('{solutionName}', solutionName)
            .replace('{userName}', userName),
      }}
      applications={object('applications', [
        {
          id: 'monitor',
          name: 'Monitor',
          href: 'https://www.ibm.com',
        },
        {
          id: 'health',
          name: 'Health',
          href: 'https://www.ibm.com',
          isExternal: true,
        },
      ])}
      surveyData={object('survey', {
        surveyLink: 'https://www.ibm.com',
        privacyLink: 'https://www.ibm.com',
      })}
    />
  );
};

export const LoadingState = () => {
  return <SuiteHeader suiteName="Application Suite" appName="Application Name" />;
};

LoadingState.story = {
  name: 'Loading state',
};

/* Sample of SuiteHeader usage with data fetching

export const HeaderWithDataFetching = () => {
  const StatefulExample = () => {
    const [data, setData] = useState({
      username: null,
      userDisplayName: null,
      email: null,
      routes: null,
      applications: null,
      showSurvey: false,
    });
    useEffect(() => {
      fetch('http://localhost:3001/internal/uiresources?id=masthead&lang=en&surveyId=test', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((resJson) => {
          if (resJson.error || resJson.exception) {
            return null;
          }
          return setData(resJson);
        });
    }, []);

    return (
      <SuiteHeader
        suiteName="Application Suite"
        appName="Application Name"
        userDisplayName={data.userDisplayName}
        username={data.username}
        routes={data.routes}
        applications={data.applications}
        i18n={data.i18n}
        surveyData={data.surveyData}
      />
    );
  };
  return <StatefulExample />;
};

HeaderWithDataFetching.story = {
  name: 'Header with data fetching',
};

*/

HeaderWithSurveyNotification.story = {
  name: 'Header with survey notification',
};
