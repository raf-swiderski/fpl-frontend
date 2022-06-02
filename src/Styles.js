import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 250,
    maxHeight: 130
  },
  cardHeader: {
    fontSize: 13
  },
  cardContent: {
    fontSize: 11
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