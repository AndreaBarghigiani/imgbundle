import searchImages from "@/utils/unsplash";

export default function Home({ data }) {
  console.log(data);
  return (
    <>
      <h1 className="text-3xl font-headings font-bold text-center">
        Hello world!
      </h1>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await searchImages();

  return {
    props: {
      data,
    },
  };
}
