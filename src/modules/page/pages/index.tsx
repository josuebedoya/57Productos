import {Suspense} from 'react';
import Skeleton from "@/modules/page/components/skeleton.tsx";
import usePage from "@/modules/page/hooks/usePage.tsx";
import {Error404} from "@/modules/error/pages/404.tsx";

const ViewComponent = ({modulePath}: { modulePath: string }) => {

  const {Component: Page, error} = usePage(modulePath);

  if (error || !Page) {
    return <Error404/>
  }

  return (
    <Suspense fallback={<Skeleton/>}>
      <Page/>
    </Suspense>
  );
};

export default ViewComponent;