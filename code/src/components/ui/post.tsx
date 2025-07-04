import {Skeleton} from "@/src/components/ui/skeleton";

interface PostProps {
  title: string;
  content: string;
  tags: string[];
  likes: number;
}

export function Post({title, content, tags, likes }: PostProps) {

  return(
    <div className="w-100 border-2 border-accent rounded-md p-4 mr-5 flex flex-col justify-between">
      <h2 className="mb-5">{title}</h2>
      <p className="mb-5">{content}</p>
      <p className="text-blue-400">
        {tags.map((tag) =>
          <span key={tag} className="mr-1">
            {tag}
          </span>
        )}
      </p>
      <p>{likes} likes</p>
    </div>
  );
}

export function PostSkeleton() {
  return (
    <Skeleton className="w-100 border-2 border-accent rounded-md p-4 mr-5 flex flex-col justify-between pb-40"/>
  )
}