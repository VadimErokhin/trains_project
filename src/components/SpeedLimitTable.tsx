import { useEffect, useState } from "react";
import { SpeedLimit, Train } from "../types";

interface SpeedLimitTableProps {
  currentTrain: Train;
}

export default function SpeedLimitTable({
  currentTrain,
}: SpeedLimitTableProps) {
  const [speedLimit, setSpeedLimit] = useState(currentTrain.speedLimits);

  const handleChangeSpeedLimit = (
    element: HTMLInputElement,
    currentIndex: number
  ) => {
    const value = element.valueAsNumber || 0;
    const newSpeedLimit = speedLimit.map((item, index) => ({
      ...item,
      speedLimit: currentIndex === index ? value : item.speedLimit,
    }));
    setSpeedLimit(newSpeedLimit);
  };

  const handleSubmit = () => {
    const newSpeedLimits = [...speedLimit];
    newSpeedLimits.sort((a, b) => a.speedLimit - b.speedLimit);
    if (newSpeedLimits[0].speedLimit > 0) {
      console.log("Updated speed limits", newSpeedLimits);
    } else {
      console.error("Invalid limit");
    }
  };

  useEffect(() => {
    setSpeedLimit(currentTrain.speedLimits);
  }, [currentTrain]);

  return (
    <div>
      <table
        border={1}
        className="border text-center text-sm font-light dark:border-neutral-500"
      >
        <caption className="text-3xl font-medium leading-tight">{currentTrain.name}</caption>
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr className="border-b dark:border-neutral-500">
            <th className="border-r px-6 py-4 dark:border-neutral-500">Имя</th>
            <th className="border-r px-6 py-4 dark:border-neutral-500">
              Лимит
            </th>
          </tr>
        </thead>
        <tbody>
          {speedLimit.map((speedLimit: SpeedLimit, index) => (
            <tr
              key={speedLimit.name}
              className="border-b dark:border-neutral-500"
            >
              <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                {speedLimit.name}
              </td>
              <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                <input
                  type="number"
                  name="number"
                  onChange={(e) => handleChangeSpeedLimit(e.target, index)}
                  value={speedLimit.speedLimit}
                ></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn" onClick={handleSubmit}>
        Отправить данные
      </button>
    </div>
  );
}
