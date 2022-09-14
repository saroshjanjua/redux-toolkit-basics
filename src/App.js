import {
  Container,
  Paper,
  Box,
  Typography,
  CssBaseline,
  Button,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement,incrementBy,decrementBy} from './redux/features/counterSlice'
function App() {
  const counter = useSelector(state=>state.counter.counter)
const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component={Box} py={4}>
        <Paper component={Box} p={3} align="center">
          <Typography align="center" variant="h1">
            {counter}
          </Typography>
          <Button onClick={()=>dispatch(increment())}>Increment</Button>
          <Button onClick={()=>dispatch(decrement())}>Decrement</Button>
          <Button onClick={()=>dispatch(incrementBy(10))}>Increment By 10</Button>
          <Button onClick={()=>dispatch(decrementBy(10))}>Decrement By 10</Button>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
