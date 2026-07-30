import * as React from 'react';

declare function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
declare function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
declare function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element;
declare function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): React.JSX.Element;
declare function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
declare function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
