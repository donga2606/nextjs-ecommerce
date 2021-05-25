import { useRecordContext } from "react-admin";
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    image : {
        width: '100px',
    }
})


const CustomImagesField = ({ source }) => { 

  const record = useRecordContext();
  const imagesUrl = record[source];
  const classes = useStyles();
  return record ? (
      <div className={classes.container}>
      { imagesUrl.map(url =>(
          <img src = {url} className={classes.image} />
      )) }
      </div>
  ) : null;
};

export { CustomImagesField };
