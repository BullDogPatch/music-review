import { db } from './dbConnection';
import { Post } from './types';

export const fetchUser = async (username: string) => {
  const user = await db.query(
    `SELECT * FROM music_app_users WHERE clerk_id = (SELECT clerk_id FROM music_app_users WHERE username = $1)`,
    [username]
  );
  return user.rows[0];
};

export const fetchAllPosts = async () => {
  const { rows } = await db.query(`SELECT * FROM music_user_posts`);
  return rows;
};

export const fetchPostsByUsername = async (username: string) => {
  const posts = await db.query(
    `
    SELECT up.id, up.title, up.description, up.image, up.created_at, u.username, u.clerk_id
    FROM music_user_posts up
    JOIN music_app_users u ON up.user_id = u.id
    WHERE u.username = $1
    ORDER BY up.created_at DESC
    `,
    [username]
  );

  return posts.rows;
};
