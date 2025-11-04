"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import OrderCard from "@/components/order-card/OrderCard";


export default function Home() {
    const searchParams = useSearchParams();
    const customerQuery = searchParams.get("customer"); // Obtenemos el valor de la query string
    const [data, setData] = useState([]);


    useEffect(()=> {
        const fetching = async () => {
            const response = await fetch(`/api/airtable?customer=${customerQuery}`);
            if (!response.ok) {
                return alert('No se pudo consumir la API');
            }
            const data = await response.json();
            alert('Se trajeron los datos correctamente');
            setData(data);
            console.log(data);
        };

        fetching();
    }, []);

  return (
      <div className="min-h-screen bg-gray-100 p-4">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
              Dashboard Afood
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
              {data && data.map((order, index) => (
                  <OrderCard key={index} order={order} />
              ))}
          </div>
      </div>
  );
}
