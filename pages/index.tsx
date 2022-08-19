import axios from "axios";
import type { NextPage } from "next";

import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

const Home: NextPage = (props: any) => {
  console.log(props.res);
  // const router = useRouter();
  // const fetchEmployee = useCallback(async () => {
  //   const res = await axios.get("http://localhost:3000/api/employee");
  //   console.log(res);
  // }, []);

  // useEffect(() => {
  //   fetchEmployee();
  // }, []);

  return (
    <div>
      {props?.res?.data?.map((x: any) => (
        <div key={x?.mal_id}>{x.title}</div>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const res = await axios.get(
      "https://nextjs-anime-try.netlify.app/api/employee"
    );
    return {
      props: { res: res.data },
    };
  } catch (err) {
    return {
      props: { res: "failed" },
    };
  }
}

export default Home;
