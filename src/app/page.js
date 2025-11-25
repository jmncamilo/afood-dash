"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import OrderCard from "@/components/order-card/OrderCard";

export default function Home() {
    const searchParams = useSearchParams();
    // const customerQuery = searchParams.get("customer"); // Obtenemos el valor de la query string, pero exponemos la consulta
    const customerQuery = 'monchef'; // nombre de cliente hardcodeado, para no exponerlo en la url del front
    const [data, setData] = useState([]);

    // Construyendo al query
    const completeQuery = `?customer=${customerQuery}`; // 'sandwich-inc-grill'

    useEffect(()=> {
        const fetching = async () => {
            const response = await fetch(`/api/airtable${completeQuery}`);
            if (!response.ok) {
                return alert('No se pudo consumir la API');
            }
            const data = await response.json();
            alert('¡Datos cargados!');
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
              {data.length > 0 && <OrderCard data={data}/>}
          </div>
      </div>
  );
}
