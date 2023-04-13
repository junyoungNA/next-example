import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'post');

export function getSortedPostData() {
  // /posts 파일 이름을 잡아주기
  const fileNames = fs.readdirSync(postsDirectory);
  //['pre-rendring.md',...]
  const allPostData: any = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { data: string; title: string }),
    };
  });

  //Sorting

  return allPostData.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else {
      -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(`/\.md$/`, ''),
      },
    };
  });
}
