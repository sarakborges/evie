import { ROUTES } from './Routes'

export const HEADER_NAV = [
  {
    TEXT: ROUTES.HOME.TITLE,
    LINK: ROUTES.HOME.PATH,
    ACTIVE_AT: [ROUTES.HOME.PATH],
  },

  {
    TEXT: ROUTES.PROFILE.TITLE,
    LINK: ROUTES.PROFILE.PATH.replace('[url]', ''),
    ACTIVE_AT: [ROUTES.PROFILE.PATH.replace('[url]', '')],
  },

  {
    TEXT: ROUTES.CONNECTIONS.TITLE,
    LINK: ROUTES.CONNECTIONS.PATH.replace('[url]', ''),
    ACTIVE_AT: [ROUTES.CONNECTIONS.PATH.replace('[url]', '')],
  },

  {
    TEXT: ROUTES.GROUPS.TITLE,
    LINK: ROUTES.GROUPS.PATH.replace('[url]', ''),
    ACTIVE_AT: [ROUTES.GROUPS.PATH.replace('[url]', '')],
  },

  {
    TEXT: ROUTES.EXPLORE.TITLE,
    LINK: ROUTES.EXPLORE.PATH,
    ACTIVE_AT: [ROUTES.EXPLORE.PATH],
  },
]
