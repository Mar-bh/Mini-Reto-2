import React from "react";
import SoundWindow from "../Components/styles";


const useStyles = makeStyles((theme) => ({
  container: {
    padding: 80
  },
}));

function Window() {
    const classes = useStyles()
  return (
    <Box className={classes.container}>
        <SoundWindow>
    </Box>
  )
}

export default Window;



{/* // import React from "react";
// // import Table from "../Components/Table";

// // import { makeStyles } from "@mui/styles";
// // import { Box } from "@mui/material";

// const useStyles = makeStyles((theme) => ({ */}
{/* //   container: { */}
{/* //     padding: 80
//   },
// }));

// function Configuration() { }

//     const classes = useStyles()
//   return (

//     <Box className={classes.container}>
//         <Table/>
//     </Box>
//   );
// }

// export default Configuration;



// import React, { useState } from "react";
// import VolumeButton from "./VolumeButton";

// const SoundsConfig = () => {

//   const [volume, setVolume] = useState(50);

//   const handleVolumeChange = () => {
//     const newVolume = volume === 0 ? 100 : 0;
//     setVolume(newVolume);
//   };

//   return (
//     <div>
//       <VolumeButton volume={volume} onClick={handleVolumeChange} />
//     </div>
//   );
// };

// export default SoundsConfig;*/}
