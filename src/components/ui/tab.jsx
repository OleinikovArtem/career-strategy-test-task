import { forwardRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '../../lib/utils';

const Tabs = TabsPrimitive.Root;

const TabsList = forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn('inline-flex items-center justify-center bg-muted text-muted-foreground', className)}
      {...rest}
    />
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap text-2xl font-medium ring-offset-background transition-all pb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground border-b-3 data-[state=active]:border-red-primary border-transparent ',
        className,
      )}
      {...rest}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <TabsPrimitive.Content
      ref={ref}
      className={cn(
        'ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className,
      )}
      {...rest}
    />
  );
});
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
