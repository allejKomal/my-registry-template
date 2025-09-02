import React from "react";
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world";
import { ScrollBar } from "@/registry/new-york/blocks/scroll-bar/scroll-bar";

export type componentDataType = {
    name: string;
    description: string;
    component?: () => React.JSX.Element | null;
    path: string;
    type: "component" | 'hook'
}

export const componentData: componentDataType[] = [
    {
        name: 'Hello world',
        description: "A simple hello world component with ability to install all primitives in one go",
        component: HelloWorld,
        path: 'hello-world',
        type: 'component'
    },
    {
        name: 'Scroll bar',
        description: "A customizable scroll bar component with custom styling to scrollbar and background of scrollbar",
        component: ScrollBar,
        path: 'scroll-bar',
        type: 'component'
    },
    {
        name: 'Theme Context',
        description: "a theme react use context with basic template and provider",
        path: 'theme-context',
        type: 'hook'
    },
    {
        name: 'use document title',
        description: "A custom hook that manages the document title",
        path: 'use-document-title',
        type: 'hook'
    },
    {
        name: 'use toggle',
        description: "A custom hook that provides a toggle function",
        path: 'use-toggle',
        type: 'hook'
    },
    {
        name: 'use boolean',
        description: "A custom hook that provides a boolean state and a toggle function",
        path: 'use-boolean',
        type: 'hook'
    },
];


