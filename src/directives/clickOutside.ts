export const clickOutside = (element: HTMLElement): { destroy: () => void } => {
    const handler = (event: MouseEvent) => {
        const target = event.target;

        if (element !== target && !element.contains(target as HTMLElement) && !event.defaultPrevented) {
            element.dispatchEvent(new CustomEvent("click-outside", element as CustomEventInit<HTMLElement>));
        }
    };

    window.document.addEventListener("click", handler, true);

    return {
        destroy: () => {
            window.document.removeEventListener("click", handler, true);
        },
    };
};
