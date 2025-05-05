import { db } from './dbConnection';

export const fetchUser = async (username: string) => {
  const user = await db.query(
    `SELECT * FROM music_app_users WHERE clerk_id = (SELECT clerk_id FROM music_app_users WHERE username = $1)`,
    [username]
  );
  return user.rows[0];
};
