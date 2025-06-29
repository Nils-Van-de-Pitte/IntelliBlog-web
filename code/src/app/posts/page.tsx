import {Header} from "@/src/components/ui/header";
import {Post} from "@/src/components/ui/post";

export default function Page() {
  return (
    <>
      <Header
        title="Posts Overview"
        subTitle="Quickly manage and update your content from one place"
      />
      <Post title="Small Steps, Big Changes 🚀"
            content="Every day is a chance to take one small step toward a bigger goal.
            It doesn’t have to be perfect — it just has to move you forward. Keep showing up. Keep trying. That’s how growth happens🌱"
            likes={5}
            tags={["#motivation", "#progressnotperfection", "#keepgoing"]}/>
    </>
  );
}