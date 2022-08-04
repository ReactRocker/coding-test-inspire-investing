import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { LinearProgress, Typography } from "@mui/material";
import styled from "@mui/styled-engine";
import { IFundInfo } from "../types/types";

const IconWithText = styled("div")({
  display: "flex",
  alignItems: "center",
  marginTop: "10px",
});

const TextWithInteger = styled(Typography)({
  marginTop: "10px",
});

const DomesticTitle = styled(Typography)({
  marginRight: "5px",
});

const SomeKindOfTitle = styled(Typography)({
  fontWeight: 600,
});

const FundNameTitle = styled(Typography)({
  marginTop: "10px",
  marginBottom: "7px",
});

const IsDomesticIcon = styled(CheckCircleIcon)({
  color: "green",
});

export const FundInfoSection = (props: IFundInfo) => {
  const renderIsDomestic = (isDomestic: boolean) => {
    return (
      <IconWithText>
        <DomesticTitle variant="subtitle1">Domestick</DomesticTitle>
        {isDomestic ? (
          <IsDomesticIcon></IsDomesticIcon>
        ) : (
          <NotInterestedIcon></NotInterestedIcon>
        )}
      </IconWithText>
    );
  };

  return (
    <>
      {renderIsDomestic(props.domestic as boolean)}
      <FundNameTitle variant="h5">{props.name}</FundNameTitle>
      <IconWithText>
        <LocationOnIcon></LocationOnIcon>
        {/* <Typography variant="caption">
          {props.exchangeLocation?.description}
        </Typography> */}
      </IconWithText>
      <TextWithInteger variant="h5">
        Impact score: <b>{props.impactScore}</b>
      </TextWithInteger>
      <LinearProgress
        value={props.impactScore}
        variant="determinate"
      ></LinearProgress>
      <TextWithInteger variant="h6">
        Market capitalization: <b>{props.marketCapitalization}</b>
      </TextWithInteger>
      <TextWithInteger variant="h6">
        Previous Share Price: <b>{props.previousSharePrice}</b>
      </TextWithInteger>
      {/* <SomeKindOfTitle variant="h6">
        {props.exchange?.description}
      </SomeKindOfTitle> */}
      {/* <SomeKindOfTitle variant="h6">{props.exchange?.name}</SomeKindOfTitle>
      <SomeKindOfTitle variant="h6">
        {props.sector?.description}
      </SomeKindOfTitle> */}
      <SomeKindOfTitle variant="h6">{props.ticker}</SomeKindOfTitle>
    </>
  );
};
