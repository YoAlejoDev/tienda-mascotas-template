import { CONST } from "./constants/consts";

function navigate(href: string): void {
    window.history.pushState({}, "", href);
    const navEvent = new Event(CONST.NAVIGATION_EVENT);
    window.dispatchEvent(navEvent);
}

type LinkProps = {
  target: string;
  to: string;
  [key: string]: unknown;
};

export function Link({ target, to, ...props }: LinkProps) {
const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const isMainEvent = event.button === 0;
    const isModifiedEvent =
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    const isManageableEvent = target === undefined || target === "_self";

    if (isMainEvent && !isModifiedEvent && isManageableEvent) {
        event.preventDefault();
        navigate(to);
    }
};

  return <a onClick={handleClick} href={to} target={target} {...props} />;
}