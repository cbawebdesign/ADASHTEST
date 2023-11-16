import configuration from '~/configuration';
import { Cog8ToothIcon, MagnifyingGlassPlusIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

const NAVIGATION_CONFIG = {
  items: [
    {
      label: 'common:dashboardTabLabel',
      path: configuration.paths.appHome,
      Icon: ({ className }: { className: string }) => {
        return <MagnifyingGlassPlusIcon className={className} />;
      },
    },
  
    {
      label: 'common:fundoneLabel',
      path: '/fundone',
      Icon: ({ className }: { className: string }) => {
        return <MagnifyingGlassPlusIcon className={className} />;
      },
    },
    {
      label: 'common:fundtwoLabel',
      path: '/fundone',
      Icon: ({ className }: { className: string }) => {
        return <MagnifyingGlassPlusIcon className={className} />;
      },
    },
    {
      label: 'common:settingsTabLabel',
      path: '/settings',
      Icon: ({ className }: { className: string }) => {
        return <Cog8ToothIcon className={className} />;
      },
    },
    {
      label: 'common:settingsTabLabel',
      path: '/daofone',
      Icon: ({ className }: { className: string }) => {
        return <Cog8ToothIcon className={className} />;
      },
    },
    {
      label: 'common:settingsTabLabel',
      path: '/daofonefl',
      Icon: ({ className }: { className: string }) => {
        return <Cog8ToothIcon className={className} />;
      },
    },
    {
      label: 'common:settingsTabLabel',
      path: '/daoftwo',
      Icon: ({ className }: { className: string }) => {
        return <Cog8ToothIcon className={className} />;
      },
    },
    {
      label: 'common:settingsTabLabel',
      path: '/daoftwofl',
      Icon: ({ className }: { className: string }) => {
        return <Cog8ToothIcon className={className} />;
      },
    },
    {
      label: 'common:settingsTabLabel',
      path: '/daftwo',
      Icon: ({ className }: { className: string }) => {
        return <Cog8ToothIcon className={className} />;
      },
    },
    {
      label: 'common:settingsTabLabel',
      path: '/daftwofl',
      Icon: ({ className }: { className: string }) => {
        return <Cog8ToothIcon className={className} />;
      },
    },
    {
      label: 'common:settingsTabLabel',
      path: '/fundoneover',
      Icon: ({ className }: { className: string }) => {
        return <Cog8ToothIcon className={className} />;
      },
    },
  ],
};

export default NAVIGATION_CONFIG;
