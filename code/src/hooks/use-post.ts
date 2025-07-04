"use client";

import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {getPosts} from "@/src/api/posts";
import {Posts} from "@/src/types/types";

/**
 * A custom hook that retrieves a list of posts using react-query's `useQuery` hook.
 *
 * This function is designed to perform data fetching for posts and automatically handles
 * caching, background updates, and error handling through `react-query`.
 *
 * @returns {Object} An object provided by `useQuery` which contains the status of the
 * query, the fetched data, error information (if any), and various helper functions
 * provided by a react-query.
 */
export const usePost = ():  UseQueryResult<Posts[]> => {
  return useQuery<Posts[], Error>({
    queryKey: ['posts'],
    queryFn: getPosts,
  })
}