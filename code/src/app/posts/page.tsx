import {Header} from "@/src/components/ui/header";
import {Post} from "@/src/components/ui/post";
import {Button} from "@/src/components/ui/button";
import {JSX} from "react";

/**
 * Renders the Posts Page.
 *
 * @return {JSX.Element} A JSX element containing a header with a title and subtitle,
 *                       a button to create a post, and a sample post displaying
 *                       content, likes, and tags.
 */
export default function Page(): JSX.Element {
  return (
    <>
      <div className="flex justify-between">
        <Header
          title="Posts Overview"
          subTitle="Quickly manage and update your content from one place"
        />
        <Button>Write a post</Button>
      </div>

      <Post title="Small Steps, Big Changes 🚀"
            content="Every day is a chance to take one small step toward a bigger goal.
            It doesn’t have to be perfect — it just has to move you forward. Keep showing up. Keep trying. That’s how growth happens🌱"
            likes={5}
            tags={["#motivation", "#progressnotperfection", "#keepgoing"]}/>
    </>
  );
}