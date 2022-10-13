import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild}: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp className={clsx('py-4 px-3 bg-red-1300 rounded font-semibold text-black-1000 text-sm w-full transition-colors hover:bg-red-400 hover:text-gray-200',
        )}
        >
            {children}
        </Comp>
    )
}
