import React, {useState} from 'react'
import { connect } from 'react-redux';

//Actions
import {addWorkData} from '../../actions/resumeFormActions.js'


import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Paper,
    Grid,
    Typography,
    makeStyles,
    Select,
    MenuItem,
    InputLabel,
    FormControl
} from '@material-ui/core'

import DescriptionIcon from '@material-ui/icons/Description'
// import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'rgba(9, 109, 217, 0.671)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',

    },
    startText:{
        display:"flex",
        flexDirection:"column",
        marginTop: "1rem"
    },
    tips:{
        backgroundColor:"white",
        width:"70%",
        height: "20rem",
        marginLeft:"15%"
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    textField:{
      textAlign:'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
      alignSelf:"center"
    },
    form: {
      width: '100%', // Fix IE 11 issue.
    //   marginTop: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
  
    },
    selectorForm: {
        width: '100%', // Fix IE 11 issue.
        // marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    selectorText: {
        display:"flex",
        flexDirection:"column",
        marginLeft: "1rem",
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

function WorkHistory(props) {

  const [info, setInfo] = useState({
    jobTitle: "" ,
    companyName: "",
    startYear: "" ,
    endYear: "",
    jobDescription: ""
  })

  const classes = useStyles();

  const nextPage = event => {
    event.preventDefault();
    props.addWorkData(info);
    props.history.push("/form/test")
    console.log("data from reducer", props.resumeData.jobs)
  }

  const onChange = event => {
    event.preventDefault();
    setInfo({...info, [event.target.name]: event.target.value})

  }

  return(
    <div>
    <Grid container componet ="main" className={classes.root}>
      <CssBaseline/>
      <Grid item xs={false} sm={4} md={3} className={classes.image}>
        <Grid item className={classes.startText}>
          <Avatar className={classes.avatar}>
            <DescriptionIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Start Making Your Resume
          </Typography>    
        </Grid>
        <Grid item className={classes.tips}>
      </Grid>
          </Grid>
          <Grid item xs={12} sm={8} md={9} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <form className={classes.form} onSubmit={nextPage}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="jobTitle"
                  label="Job Title"
                  id="jobTitle"
                  onChange={onChange}
                  value = {info.jobTitle}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="companyName"
                  label="Name of the company"
                  id="companyName"
                  onChange={onChange}
                  value = {info.companyName}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="startYear"
                  label="Starting Your Job"
                  id="startYear"
                  onChange={onChange}
                  value = {info.startYear}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="endYear"
                  label="Ending Your Job"
                  id="endYear"
                  onChange={onChange}
                  value = {info.endYear}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="jobDescription"
                  label="Job Description"
                  id="jobDescription"
                  onChange={onChange}
                  value = {info.jobDescription}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  
                >
                  Next
                </Button>

                
              </form>
            </div>
          </Grid>
        </Grid>
        <button onClick={() => nextPage()}>Next Page</button>
      </div>

  )

}

const mapStateToProps = state => {
  return {
      resumeData: state.resumeFormReducer.resumeData,
      resumeError: state.resumeFormReducer.error,
      resumeLoading: state.resumeFormReducer.loading,
  }
}

export default connect(
  mapStateToProps,
  {addWorkData}
) (WorkHistory)
