import { Train } from "../types";

interface TableProps {
  trains: Array<Train>;
  setCurrentTrain: (train:Train) => void;
}

export default function Table({trains, setCurrentTrain}: TableProps) {

  return (
    <table border={1} className="border text-center text-sm font-light dark:border-neutral-500">
      <caption className="text-3xl font-medium leading-tight">Поезда</caption>
      <thead className="border-b font-medium dark:border-neutral-500">
        <tr className="border-b dark:border-neutral-500">
          <th className="border-r px-6 py-4 dark:border-neutral-500">Имя</th>
          <th className="border-r px-6 py-4 dark:border-neutral-500">Описание</th>
          <th className="border-r px-6 py-4 dark:border-neutral-500">Действия</th>
        </tr>
      </thead>
      <tbody>
        {trains.map((train: Train) => (
          <tr className="border-b dark:border-neutral-500" key={train.name}>
            <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">{train.name}</td>
            <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">{train.description}</td>
            <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
              <button
              type="button"
              className="btn"
              onClick={() => setCurrentTrain(train)}>Изменить лимит</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


