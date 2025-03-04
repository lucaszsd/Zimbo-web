import { DashboardHeader } from "@/components/dashboard/header";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <DashboardHeader
        heading="Enviroment"
        text="Manage development enviroment"
      />
      <div className="grid gap-8">
        <Skeleton className="h-28 w-full rounded-lg md:h-24" /> 
      </div>
    </>
  );
}
