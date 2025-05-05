'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { db } from './dbConnection';

export const createuser = async (formData: FormData) => {
  const id = formData.get('clerk_id');
  const firstName = formData.get('first_name');
  const lastName = formData.get('last_name');
  const username = formData.get('username');
  const bio = formData.get('bio');

  await db.query(
    `INSERT INTO music_app_users (first_name, last_name, username, bio, clerk_id) VALUES ($1, $2, $3, $4, $5)`,
    [firstName, lastName, username, bio, id]
  );
  redirect(`/user-profile/${username}`);
};

export const createPost = async (formData: FormData) => {
  const id = formData.get('clerk_id');
  const title = formData.get('title');
  const image = formData.get('image');
  const description = formData.get('description');

  const user = await db.query(
    `SELECT username FROM music_app_users WHERE clerk_id = $1`,
    [id]
  );

  if (!user.rows[0]) throw new Error('User not found');

  const username = user.rows[0].username;
  await db.query(
    `INSERT INTO music_user_posts (user_id, title, image, description)
VALUES (
  (SELECT id FROM music_app_users WHERE clerk_id = $1),
  $2,
  $3,
  $4
)
RETURNING *`,
    [id, title, image, description]
  );
  revalidatePath(`/user-profile/${username}`);
  redirect(`/user-profile/${username}`);
};
