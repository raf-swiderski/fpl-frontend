import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 250,
    maxHeight: 130
  },
  cardHeader: {
    fontSize: 15
  },
  cardContent: {
    fontSize: 13
  },
  welcomeHeader: {
    fontSize: 35,
    textAlign:"center"
  },
  welcomeContent: {
    fontSize: 20,
    textAlign:"center"
  }
})

export default useStyles;