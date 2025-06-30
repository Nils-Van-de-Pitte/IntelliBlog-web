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
          <Post title="Small Steps, Big Changes 🚀"
                content="Every day is a chance to take one small step toward a bigger goal.
            It doesn’t have to be perfect — it just has to move you forward. Keep showing up. Keep trying. That’s how growth happens🌱"
                likes={5}
                tags={["#motivation", "#progressnotperfection", "#keepgoing"]}/>
          <Post title="Small Steps, Big Changes 🚀"
                content="Every day is a chance to take one small step toward a bigger goal.
            It doesn’t have to be perfect — it just has to move you forward. Keep showing up. Keep trying. That’s how growth happens🌱"
                likes={5}
                tags={["#motivation", "#progressnotperfection", "#keepgoing"]}/>
        </div>
    </>
  );
}