import { useCallback, useMemo } from "react";
import Layout from "../../components/Layout";
import Table from "../../components/Table";
import Button from "../../components/Button";
import Customer from "../../core/Customer";

export default function Home() {
  const customers = useMemo(() => [
    new Customer('Ana', 34, '1'),
    new Customer('Bia', 45, '2'),
    new Customer('Carlos', 23, '3'),
    new Customer('Pedro', 54, '4'),
  ], []);

  const selectedCustomer = useCallback((customer: Customer)=>{
    console.log(customer.name)
  },[]);

  const deletedCustomer = useCallback((customer: Customer)=>{
    console.log('deletar: ',customer.name)
  },[]);

  return (
    <div className={`
      flex h-screen justify-center items-center 
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout
        title="Cadastro Simples"
      >
        <div className="flex justify-end">
          <Button
          color="green"
            className="mb-4"
          >
            Novo cliente
          </Button>
        </div>
        <Table 
          customers={customers} 
          selectedCustomer={selectedCustomer}
          deletedCustomer={deletedCustomer}
        />
      </Layout>
    </div>
  )
}
