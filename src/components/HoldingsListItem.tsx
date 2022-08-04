import {
  Button,
  CardActions,
  CardContent,
  LinearProgress,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { Holding } from "../types/types";

const StyledCardContainer = styled("div")({
  margin: 5,
  backgroundColor: "#e6f0fc",
  borderRadius: 9,
});
const ScoreBar = styled(LinearProgress)({
  marginTop: 5,
  marginBottom: 5,
});

export const HoldingsListItem = (props: Holding) => {
  return (
    <StyledCardContainer>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.name}
        </Typography>
        <Typography variant="h5" component="div">
          Score: {props.score}
          <ScoreBar value={props.score} variant="determinate"></ScoreBar>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Holding percentage: <b>{props.holdingPercentage}%</b>
        </Typography>
        <Typography variant="body2">{props.ticker}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </StyledCardContainer>
  );
};
