import {
  FaGooglePlay,
  FaApple,
  FaGlobe,
  FaServer,
  FaWhatsapp,
  FaDesktop,
} from "react-icons/fa";
import type { SystemInterface, SystemStatus } from "../../data/types";

export const STATUS_LABEL: Record<SystemStatus, string> = {
  LIVE: "No ar",
  BETA: "Beta",
  IN_DEVELOPMENT: "Em desenvolvimento",
  COMING_SOON: "Em breve",
};

const PLATFORM_ICON = {
  mobile: null,
  web: <FaGlobe size={12} />,
  api: <FaServer size={12} />,
  whatsapp: <FaWhatsapp size={12} />,
  desktop: <FaDesktop size={12} />,
};

export type InterfaceBadge = {
  key: string;
  icon: React.ReactNode;
  label: string;
  href?: string;
};

export const isRealLink = (url?: string) => Boolean(url) && url !== "#";

export const buildInterfaceBadges = (iface: SystemInterface): InterfaceBadge[] => {
  if (iface.platform === "mobile") {
    return [
      {
        key: `${iface.id}-android`,
        icon: <FaGooglePlay size={12} />,
        label: `${iface.label} · Android`,
        href: isRealLink(iface.links?.playStore) ? iface.links?.playStore : undefined,
      },
      {
        key: `${iface.id}-ios`,
        icon: <FaApple size={12} />,
        label: `${iface.label} · iOS`,
        href: isRealLink(iface.links?.appStore) ? iface.links?.appStore : undefined,
      },
    ];
  }

  if (iface.platform === "api") {
    return [
      {
        key: iface.id,
        icon: PLATFORM_ICON.api,
        label: iface.label,
      },
    ];
  }

  const href = iface.links?.web ?? iface.links?.url ?? undefined;

  return [
    {
      key: iface.id,
      icon: PLATFORM_ICON[iface.platform],
      label: iface.label,
      href: isRealLink(href) ? href : undefined,
    },
  ];
};
