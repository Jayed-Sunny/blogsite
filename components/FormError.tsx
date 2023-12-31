import React from "react";

type Props = {
    children: React.ReactNode;
};

export default function FormError({ children }: Props) {
    return (
        <div>
            <span className="text-sm text-red-500">{children}</span>
        </div>
    );
}
