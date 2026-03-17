"use client";

import { Button, Flex, Text } from "@radix-ui/themes";
import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";

import { useRouter, useSearchParams } from "next/navigation";
interface Props {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
}

export default function Pagination({
  itemsCount,
  pageSize,
  currentPage,
}: Props) {
  const pageCount = Math.ceil(itemsCount / pageSize);
  const searchParams = useSearchParams(); // we are storing the existing searchparams not to override
  const router = useRouter();

  const changeClick = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  return (
    <Flex gap="2" align="center">
      <Text size="2">
        page {currentPage} of {pageCount}
      </Text>
      <Button color="gray" variant="soft"  onClick={() => changeClick(1)}>
        <DoubleArrowLeftIcon />
      </Button>
      <Button
        color="gray"
        variant="soft"
        disabled={currentPage == 1}
        onClick={() => changeClick(currentPage - 1)}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        color="gray"
        variant="soft"
        disabled={currentPage === pageCount}
        onClick={() => changeClick(currentPage + 1)}
      >
        <ChevronRightIcon />
      </Button>
      <Button
        color="gray"
        variant="soft"
        onClick={() => changeClick(pageCount)}
      >
        <DoubleArrowRightIcon />
      </Button>
    </Flex>
  );
}
