import { LinearProgress } from "@mui/material";
import styled from "@mui/styled-engine";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { FundInfoSection } from "../components/FundInfoSection";
import { HoldingsList } from "../components/HoldingsList";
import { IFundInfo, Holding } from "../types/types";

const MainContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  columnGap: "30px",
  height: "100%",
  maxWidth: "1080px",
  margin: "0 auto 0 auto",
  backgroundColor: "#f5f8fc",
  padding: "10px 30px 10px 30px",
});

export const Holdings = () => {
  const [holdings, setHoldings] = useState<Holding[]>();
  const [fundInfo, setFundInfo] = useState<IFundInfo>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchHoldings = async () => {
      const holdingsInfo = await axios.get(
        "https://api.inspireinsight.com/api/tickers/1784/constituents?size=5"
      );
      setHoldings(holdingsInfo.data.holdings);
      setFundInfo(holdingsInfo.data.fund);
      setIsLoading(false);
    };
    fetchHoldings();
  }, []);
  return (
    <>
      {isLoading ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : (
        <MainContainer>
          <Box>
            <FundInfoSection {...fundInfo}></FundInfoSection>
          </Box>
          <Box>
            <HoldingsList holdings={holdings}></HoldingsList>
          </Box>
        </MainContainer>
      )}
    </>
  );
};
