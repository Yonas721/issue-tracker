import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Card, Flex } from "@radix-ui/themes";

export default function Loading() {
  return (
    <div className="p-6">
      <Skeleton width="8rem"/>
      <Flex className="space-x-3 items-center my-4">
        <Skeleton width="5rem"/>
        <Skeleton width="5rem" />
      </Flex>

      <Card className="prose">
        <Skeleton count={3} />
      </Card>
    </div>
  );
}
