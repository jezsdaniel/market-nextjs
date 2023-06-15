import React from 'react';

export const DetailsTable = () => {
  return (
    <div className="hidden lg:block my-14 w-full">
      <table className="table-fixed w-full">
        <thead className="border-b">
          <tr className="text-neutral-500">
            <th className="py-3 px-2 text-sm font-medium text-start w-[280px]">
              Producto
            </th>
            <th className="py-3 px-2 text-sm font-medium text-center">Cantidad</th>
            <th className="py-3 px-2 text-sm font-medium text-start">Unidad de medida</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 px-2 text-base leading-5 font-medium text-start">
              Ron Habana Club añejo 3 años
            </td>
            <td className="py-3 px-2 text-base leading-5 font-medium text-center">1</td>
            <td className="py-3 px-2 text-base leading-5 font-medium text-start">
              botella
            </td>
          </tr>
          <tr>
            <td className="py-3 px-2 text-base leading-5 font-medium text-start">
              Perfume de hombre Vegueros
            </td>
            <td className="py-3 px-2 text-base leading-5 font-medium text-center">1</td>
            <td className="py-3 px-2 text-base leading-5 font-medium text-start">
              100ml
            </td>
          </tr>
          <tr>
            <td className="py-3 px-2 text-base leading-5 font-medium text-start">
              Refresco (sabor Cola, Limón, Naranja o Mate según disponibilidad)
            </td>
            <td className="py-3 px-2 text-base leading-5 font-medium text-center">1</td>
            <td className="py-3 px-2 text-base leading-5 font-medium text-start">1.5L</td>
          </tr>
          <tr>
            <td className="py-3 px-2 text-base leading-5 font-medium text-start">Cake</td>
            <td className="py-3 px-2 text-base leading-5 font-medium text-center">1</td>
            <td className="py-3 px-2 text-base leading-5 font-medium text-start">
              unidad
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
