async function getApplication(apiKey) {
  const [result] = await db.query(
    `
    SELECT * FROM applications
    WHERE  api_key=:apiKey;
  `,
    {
      apiKey,
    }
  );

  console.log(result);

  if (result.length === 0) return false;
  return result[0];
}
