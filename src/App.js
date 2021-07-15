import Box from "@material-ui/core/Box";
import yellow from "@material-ui/core/colors/yellow";
import grey from "@material-ui/core/colors/grey";

function App() {
  return (
    <Box sx={{ backgroundColor: yellow[500], color: grey[900], padding: 4 }}>
      Yellow box
    </Box>
  );
}

export default App;
