export const CONTROL_SIDEMENU = 'CONTROL_SIDEMENU';

export function control_sidemenu(isSideMenuOpen) {
  return {
    type: CONTROL_SIDEMENU,
    isSideMenuOpen
  }
}

