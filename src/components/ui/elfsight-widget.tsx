
'use client';

import { useEffect, useState } from "react";

export function ElfsightWidget() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            {isClient && (
                <div className="elfsight-app-6cf42501-5de5-412b-bbe5-f462764accaa" data-elfsight-app-lazy></div>
            )}
        </>
    );
}
