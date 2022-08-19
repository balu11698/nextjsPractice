import axios from "axios";
import type { NextPage } from "next";

import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

const Home: NextPage = (props: any) => {
  console.log(props.res);
  const router = useRouter();
  const fetchEmployee = useCallback(async () => {
    const res = await axios.get("/api/employee");
    console.log(res);
  }, []);

  useEffect(() => {
    fetchEmployee();
  }, []);

  return (
    <div>
      {props?.res?.data?.map((x: any) => (
        <div key={x?.mal_id}>{x.title}</div>
      ))}
    </div>
  );
};

export async function getServerSideProps(req: any) {
  try {
    const hostname = req.req.headers.host;
    const res = await axios.get(`https://${hostname}/api/employee`);
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
