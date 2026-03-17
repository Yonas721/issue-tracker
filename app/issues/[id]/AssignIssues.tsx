"use client";


import useUsers from "@/app/hooks/useUsers";
import { Select } from "@radix-ui/themes";

import axios from "axios";

import toast, { Toaster } from "react-hot-toast";
import Skeleton from "react-loading-skeleton";

export default function AssignIssue({ issue }: { issue: number }) {
  const { data: users, error, isLoading } = useUsers();

  if (error) return null;
  if (isLoading) return <Skeleton />;

  const assignTask = async (userId: string) => {
    try {
      await axios.patch("/api/issues/" + issue, {
        assignedToUserId: userId,
      });
    } catch {
      toast.error("change couldnt be saved");
    }
  };

  return (
    <>
      <Select.Root defaultValue="Assign issues" onValueChange={assignTask}>
        <Select.Trigger />
        <Select.Content>
          <Select.Group>
            {users?.map((user) => {
              return (
                <Select.Item value={user.id} key={user.id}>
                  {user.name}
                </Select.Item>
              );
            })}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
}
