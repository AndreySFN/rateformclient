import React from "react";

export const createHandleInput = (setState: (value: string) => void) =>
    (e: React.FormEvent<HTMLInputElement>) => {
        setState(e.currentTarget.value);
    }