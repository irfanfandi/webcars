"use client";
import DetailCar from "@/components/home/DetailCar";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  const [data, setData]: any[] = useState([]);
  const [selectedData, setSelectedData]: any = useState({});

  const getData = async () => {
    try {
      const ress = await fetch("https://freetestapi.com/api/v1/cars?limit=5");
      if (ress.ok) {
        const datas = await ress.json();
        setData(datas);
        setSelectedData(datas[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <section className="flex text-gray-600 body-font items-center justify-between gap-4">
        <div className="space-y-2">
          {data.map((e: any) => {
            return (
              <div
                key={e.id}
                onClick={() => {
                  setSelectedData(e);
                }}
                className={`${
                  selectedData?.id === e.id
                    ? "border-indigo-500"
                    : "border-gray-400"
                } rounded border-2 p-4 cursor-pointer mr-12`}
              >
                <h4 className="text-xl font-bold">{e.model}</h4>
                <h6 className="text-lg font-bold">{e.year}</h6>
              </div>
            );
          })}
        </div>
        <Suspense fallback={"Loading...."}>
          <DetailCar selectedData={selectedData} />
        </Suspense>
      </section>
    </main>
  );
}
