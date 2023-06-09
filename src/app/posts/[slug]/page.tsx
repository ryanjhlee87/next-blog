import { getPostData } from '@/service/posts';

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  // 1. 전달된 slug에 해당하는 포스트 데이터를 읽어와서
  // 2. 데이터를 마크다운 뷰어에 표기하면 됨

  const posts = await getPostData(slug);

  return (
    <>
      <h1>{posts.title}</h1>
      <pre>{posts.content}</pre>
    </>
  );
}
