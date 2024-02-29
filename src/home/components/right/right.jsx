import General from "./general/general";
import { Full, GeneralStyled, TransactionStyled } from "./right.styles";
import Transaction from "./transaction/transaction";

const Right = () => {
  return (
    <Full>
      <GeneralStyled>
        <General />
      </GeneralStyled>
      <TransactionStyled>
        <Transaction />
      </TransactionStyled>
    </Full>
  );
};
export default Right;
