"use client";

import {Header} from "@/src/components/ui/header";
import {Post, PostSkeleton} from "@/src/components/ui/post";
import {Button} from "@/src/components/ui/button";
import {usePost} from "@/src/hooks/use-post";
import {Error} from "@/src/components/ui/error";
import {JSX} from "react";
import {Posts} from "@/src/types/types";

/**
 * Renders the Posts Page.
 *
 * @return {JSX.Element} A JSX element containing a header with a title and subtitle,
 *                       a button to create a post, and a sample post displaying
 *                       content, likes, and tags.
 */
export default function Page(): JSX.Element {
  const {data, isPending, error} = usePost();

  return (
    <>
        {/*Title container*/}
        <div className="flex justify-between mr-10">
          <Header
            title="Posts Overview"
            subTitle="Quickly manage and update your content from one place"
          />
          <Button variant="outline" size="sm">
            Create Post
          </Button>
        </div>

      {/*Content container*/}
      <div className="flex flex-wrap ml-10">
        {isPending ? (
          <PostSkeleton />
        ) : (
          error ? (<Error message={error.message}></Error>) : (
            data?.map((post: Posts) => (
              <Post
                key={post.id}
                content={post.content}
                likes={post.likes}
                tags={post.tags}
                title={post.title}
              />
            ))
          )
        )}
      </div>
    </>
  );
}