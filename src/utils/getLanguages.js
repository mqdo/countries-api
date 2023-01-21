export default function getLanguages(languages) {
  if (languages?.length <= 1) return languages?.[0]?.name;
  return languages
    ?.slice(1)
    ?.reduce(
      (acc, curr) => acc + ', ' + curr.name,
      languages?.[0]?.name
    );
}