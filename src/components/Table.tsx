import { useCallback, useMemo } from 'react';
import Customer from '../core/Customer';
import { IconEdit, IconTrash } from './Icons';

interface TableProps {
  customers: Customer[];
  selectedCustomer?: (customer: Customer) => void;
  deletedCustomer?: (customer: Customer) => void;
}

function Table({ customers, selectedCustomer, deletedCustomer }: TableProps) {

  const showActions = useMemo(() =>
    !!selectedCustomer || !!deletedCustomer
    , [selectedCustomer, deletedCustomer]);

  const handlerHeader = useCallback(() => {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {showActions && <th className="p-4">Ações</th>}
      </tr>
    )
  }, [showActions]);

  const handlerActions = useCallback((customer: Customer) => {
    return (
      <td className="flex justify-center">
        {selectedCustomer && (
          <button
            className={`
              flex justify-center items-center
              text-green-600 rounded-full p-2 m-1
              hover:bg-purple-50
            `}
            onClick= {()=>selectedCustomer?.(customer)}
          >
            {IconEdit}
          </button>
        )}
        {deletedCustomer && (
          <button
            className={`
              flex justify-center items-center
              text-red-500 rounded-full p-2 m-1
              hover:bg-purple-50
            `}
            onClick= {()=>deletedCustomer?.(customer)}
          >
            {IconTrash}
          </button>
        )}
      </td>
    )
  }, [selectedCustomer, deletedCustomer]);

  const handlerDates = useCallback(() => {
    return customers?.map((customer, i) => (
      <tr
        key={customer.id}
        className={`bg-purple-${i % 2 === 0 ? '200' : '100'}`}
      >
        <td className="text-left p-4">{customer.id}</td>
        <td className="text-left p-4">{customer.name}</td>
        <td className="text-left p-4">{customer.age}</td>
        {showActions && handlerActions(customer)}
      </tr>
    ))
  }, [customers, showActions, handlerActions]);

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`
         text-gray-100
          bg-gradient-to-r from-purple-500 to-purple-800
        `}
      >
        {handlerHeader()}
      </thead>
      <tbody>
        {handlerDates()}
      </tbody>
    </table>
  );
}

export default Table;
