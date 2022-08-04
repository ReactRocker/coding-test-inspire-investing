import { Holding } from "../types/types";
import { HoldingsListItem } from "./HoldingsListItem";

interface IHoldingProps {
  holdings: Holding[] | undefined;
}

export const HoldingsList = (props: IHoldingProps) => {
  return (
    <>
      {props.holdings?.map((holdingItem: Holding) => {
        return (
          <HoldingsListItem
            {...holdingItem}
            key={holdingItem.financialInstrumentId}
          ></HoldingsListItem>
        );
      })}
    </>
  );
};
