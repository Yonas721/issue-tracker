import { Text } from "@radix-ui/themes";
import { ReactNode } from "react";

interface Props {
  message: ReactNode;
}
export default function ErrorMessage({ message }: Props) {
  return (
    <Text color="red" as="p">
      {message}
    </Text>
  );
}
