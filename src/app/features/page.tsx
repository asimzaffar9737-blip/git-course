"use client";

import { REST_API_BASE_URL } from "@/lib/constants";
import { useEffect, useState } from "react";

type User = {
  _id: string;
  name: string;
  slug: string;
  email: string;
  role: string;
  avatarUrl: string;
  mobile: string;
  emailVerifiedAt: string;
  passwordResetAt: string;
  lastLoginAt: string;
  provider: string;
  providerId: string | null;
  newsletter: boolean;
  savedTools: string[];
  createdAt: string;
  updatedAt: string;
};

export default function FeaturesPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch(`${REST_API_BASE_URL}/users`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTc4ODdiNDBhZmMxMTljMjZhNjJiNDQiLCJlbWFpbCI6InNhcWliQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsIm5hbWUiOiJTYXFpYiIsImlhdCI6MTc5MzM2NjgzNiwiZXhwIjoxNzkzNDUzMjM2fQ.WXKnslVnWT2mFE7S3Oy4AAYIlF1oWjnkKgJDYF3bDnVFut7oYkiwIjxI27HnAV1W",
      },
    })
      .then((res) => res.json())
      .then(
        (data: {
          success: boolean;
          message: string;
          users: User[];
          meta: {
            totalUsers: number;
            limit: number;
            page: number;
            totalPages: number;
            nextPage: number;
            prevPage: number | null;
            pageStart: number;
            hasPrevPage: boolean;
            hasNextPage: boolean;
            activeUsers: number;
            bannedUsers: number;
            todayRegisteredUsers: number;
          };
        }) => setUsers(data.users),
      );
  }, []);

  return (
    <div className="text-6xl text-red-300 grid grid-cols-3 gap-4 p-4">
      {users.map((user) => (
        <div key={user._id} className="bg-white p-8 rounded-2xl">
          <h1 className="text-red-500 text-3xl font-bold">{user.name}</h1>
          <p className="text-amber-400 text-xl">{user.email}</p>
        </div>
      ))}
    </div>
  );
}
