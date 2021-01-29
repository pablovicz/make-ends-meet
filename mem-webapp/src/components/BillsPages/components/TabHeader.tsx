
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        
      },
    },
  }),
);

function TabHeader(){

  const classes = useStyles();

  return ( 
    <div className="tab-header">
      <TextField id="outlined-basic" label="Search" variant="outlined" className={classes.root}/>
      <Link type="button" to="/bills/current/add-new" className="tab-header-button">
        <AddIcon className="tab-header-button-icon"/>
        <h1 className="tab-header-button-title" >ADD BILL</h1>
      </Link>
    </div>
  );

}

export default TabHeader;