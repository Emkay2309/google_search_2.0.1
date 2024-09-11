declare module '@heroicons/react/solid' {
    import { FC, SVGProps } from 'react';

    const icons: {
        [key: string]: FC<SVGProps<SVGSVGElement>>;
    };

    export default icons;
}
