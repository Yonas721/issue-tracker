import { useQuery } from "@tanstack/react-query";
import { User } from "../generated/prisma/client";
import axios from "axios";

export default function useUsers() {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data.users),
    staleTime: 60 * 1000,
    retry: 3,
  });
}
