'use server';

import { db } from '@/app/utils/dbConnection';
import { redirect } from 'next/navigation';

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
  redirect(`/`);
};
